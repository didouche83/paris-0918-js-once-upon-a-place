import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <Footer/>
      </div>
    );
  }
}

export default App;
