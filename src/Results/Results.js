import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import ResultList from './Results/ResultList';
// import Map from './Map';
// import HeaderResults from './HeaderResults';

class Results extends Component {
  state = {
    res: []
  };

  searchMovie = async () =>{
    const api_call = await fetch(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25Man%25'`);
    if (api_call.ok) {
      const data = await api_call.json();
      this.setState({
        res: data
      })
    }else{
      const data = undefined;
    }
  };

  componentWillMount(){
    this.searchMovie()
  };

  render(){
    return(
      <div className= "Results">
        {/* <HeaderResults/> */}

        {/* <BrowserRouter className="mobileOnly">
          <NavLink to="/Result/List">List</NavLink>
          <NavLink to="/Result/Map">Map</NavLink>
          <Switch>
            <Route path="/Result/List" component={ResultList} />
            <Route path="/Results/Map" component={Map} />
          </Switch>
        </BrowserRouter> */}

        <ResultList 
          className="desktopOnly"
          locationsList = {this.state.res}
        />
        {/* <Map className="desktopOnly"/> */}
      </div>
    );
  }
}

export default Results;