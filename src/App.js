import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import './App.css';

import Home from './Home.js';
import Results from './Results/Results';
import Footer from './Footer';
import './App.css';

class App extends Component {

  autoComp = async (e) =>{
    const input = e.target.value;
    const url = `https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25${input}%25'&$limit=5`
    const call_api = await fetch(url);
    const data = await call_api.json()
    this.setState({
      data:data
    })
    console.log (this.state.data)
  }


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
