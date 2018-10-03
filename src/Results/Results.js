import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import ResultList from './Results/ResultList';
// import Map from './Map';
// import HeaderResults from './HeaderResults';

class Results extends Component {
  state = {
    res: []
  };

  searchLoc = async () =>{
    const api_call = await fetch(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25Man%25'`);
    if (api_call.ok) {
      const data = await api_call.json();
      this.setState({
        res: data
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

          <BrowserRouter className="mobileOnly">
            <div>
              <NavLink to="/Results/List">List</NavLink>
              <NavLink to="/Results/Map">Map</NavLink>
              <Switch>
                <Route path="/Results/List" component={ResultList} />
                <Route path="/Results/Map" component={Map} />
              </Switch>
            </div>
          </BrowserRouter>

          <ResultList 
            className="desktopOnly"
            locationsList = {this.state.res}
          />
          {/* <Map className="desktopOnly"/> */}
        </div>
      );
    }else{
      return <p>Loading...</p>
    }
  }
}

export default Results;