import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import ResultList from './ResultList';
import Map from './Map';
import HeaderResults from './HeaderResults';
import './Results.css'

class Results extends Component {
  state = {
    res: [],
    isLoaded: false
  };

  searchLoc = async () =>{
    const input = this.props.input;
    const api_call = await fetch(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25${input}%25'&$limit=5`);
    const data = await api_call.json();
    this.setState({
      res: api_call.ok?data:[],
      isLoaded: true
    })
  };

  componentDidMount(){
    this.searchLoc()
  };

  render(){
    if (this.state.isLoaded){
      if (this.state.res.length > 0){
        return(
          <div className= "Results">
            <div className='resHeader'>
              <HeaderResults valueInput={this.props.input}/>
            </div>

            <div className='resContent'>
              <div className="mobileOnly">
                <BrowserRouter>
                  <div className='router'>
                    <NavLink 
                      className="tab"
                      to="/Results/List"
                      >List</NavLink>
                    <NavLink 
                      className="tab"
                      to="/Results/Map"
                      >Map</NavLink>
                    <Switch>
                      <Route 
                        path="/Results/List"
                        render={(props)=> 
                          <ResultList 
                            locationsList={this.state.res} 
                          />}
                      />
                      <Route path="/Results/Map" component={Map} />
                    </Switch>
                  </div>
                </BrowserRouter>
              </div>
              <div className="desktopOnly">      
                <ResultList 
                  locationsList = {this.state.res} 
                />
                <Map />
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