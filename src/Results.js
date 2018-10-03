import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import List from './List';
import Map from './Map';
import HeaderResults from './HeaderResults';

class Results extends Component {
  state = {
    title: undefined,
    writer: undefined,
    release_year: undefined,
    locations: undefined
  };

  componentWillMount(){
    searchMovie = async (e) =>{
      const api_call = await fetch(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25Man%25'`);
      if (api_call.ok) {
          const data = await api_call.json();
          console.log(data);
      }else{
        data = undefined;
      }
    };
  };


  render(){
    return(
      <div className= "Results">
        <HeaderResults/>

        <BrowserRouter className="mobileOnly">
          <NavLink to="/Result/List">List</NavLink>
          <NavLink to="/Result/Map">Map</NavLink>
          <Switch>
            <Route path="/Result/List" component={List} />
            <Route path="/Results/Map" component={Map} />
          </Switch>
        </BrowserRouter>

        <List className="desktopOnly"/>
        <Map className="desktopOnly"/>
      </div>
    );
  }
}

export default Results;