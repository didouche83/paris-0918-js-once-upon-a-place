import React, { Component } from 'react';
import logo from './images/logo1.png';
import './Header.css';

const Header = () => (
	<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Once Upon a Place</h1>
    </header>
);

export default Header;