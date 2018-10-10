import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import './App.css';

import Home from './Home.js';
import Results from './Results/Results';
import Footer from './Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
                <Switch>
                  <Route 
                    exact path="/" 
                    render={(props)=> 
                      <Home 
                        autoComp={this.autoComp} 
                      />} 
                  />
                  <Route 
                    path="/Results" 
                    render={(props)=> 
                      <Results 
                        input={document.getElementById('searchInput').value} 
                      />} 
                  />
                </Switch>
            </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
