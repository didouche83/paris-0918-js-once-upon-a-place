import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import ResultList from './ResultList';
import Map from './Map';
// import HeaderResults from './HeaderResults';
import './Results.css'

class Results extends Component {
  state = {
    res: []
  };

  searchLoc = async () =>{
    const input = this.props.input;
    const api_call = await fetch(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25${input}%25'&$limit=5`);
    if (api_call.ok) {
      const data = await api_call.json();
      this.setState({
        res: data
      })
    }else{
      this.setState({
        res: []
      })
    }
  };

  componentDidMount(){
    this.searchLoc()
  };

  render(){
    if (this.state.res.length > 0){
      return(
        <div className= "Results">
          {/* <HeaderResults/> */}
          <div className="mobileOnly">
            <BrowserRouter>
              <div>
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
      );
    }else{
      return <h2>La recherche n'a donné aucun résultat</h2>
    }
  }
}

export default Results;