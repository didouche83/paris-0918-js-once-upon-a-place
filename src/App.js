import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Results from './Results/Results';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Results" component={Results} />
          </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
