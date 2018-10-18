import React, { Component } from 'react';
import {AppBar,Tabs,Tab} from '@material-ui/core';
import ResultList from './ResultList';
import SimpleMap from './Map';
import HeaderResults from './HeaderResults';
import './Results.css';

class Results extends Component {
  state = {
    res_Sf: [],
    res_Movie_Db: {},
    isLoaded: false,
    value: 0
  };

  searchLoc = async (iValue) =>{

    const api_call_Sf = await fetch(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25${iValue}%25'&$limit=50`);
    const api_call_Movie_Db = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=d3de5ea523ed39ab920f7df5228dc53c&language=en-US&query='${iValue}'&page=1&include_adult=false`)

    const dataSf = await api_call_Sf.json();
    const dataMovieDb = await api_call_Movie_Db.json();

    this.setState({
      res_Sf: api_call_Sf.ok ? dataSf : [],
      res_Movie_Db: api_call_Movie_Db.ok ? dataMovieDb : [],

      isLoaded: true
    })
  };

  componentDidMount(){
    this.searchLoc(this.props.inputValue)
  };


  handleChange = (_, iValue) => {
    this.setState({ value: iValue });

  };

  render(){
    //console.log(this.state.res_Movie_Db)
    //console.log(this.state.res_Sf)
    const { value } = this.state;
    if (this.state.isLoaded){
      if (this.state.res_Sf.length > 0){
        return(
          <div className= "Results">
            <div className='resHeader'>
              <HeaderResults inputValue={this.props.inputValue}  searchLoc={this.searchLoc}/>
            </div>

            <div className='resContent'>
              <div className="mobileOnly">
                <div>
                  <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} centered>
                      <Tab label="List" />
                      <Tab label="Map" />
                    </Tabs>
                  </AppBar>
                  {value === 0 && <ResultList 
                    locationsList = {this.state.res_Sf} 
                    movieInformations = {this.state.res_Movie_Db}
                  />}
                  {value === 1 && <SimpleMap />}
                </div>
              </div>
              <div className="desktopOnly">      
                <ResultList 
                  locationsList = {this.state.res_Sf} 
                  movieInformations = {this.state.res_Movie_Db}
                />
                <SimpleMap />
              </div>
            </div>
          </div>
        );
      }else{
        return <h2>Sorry! Nothing was found!</h2>
      }
    }else{return<h2 className='loading'>Loading...</h2>}
  }
}

export default Results;