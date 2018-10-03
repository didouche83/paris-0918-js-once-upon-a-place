import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import './Home.css';

class Home extends Component {
	render(){
		return(
      <div>
      <Header/>
			<main>
				<form>
					<label htmlFor="searchInput"></label>
					<div className="inputs">
						<input type="text" id="searchInput" placeholder="Search movie..."/>
						<NavLink to="/Results"> 
              <input type="submit" value="Search"/>
            </NavLink>
					</div>
				</form>
				<p className="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem eum rerum pariatur, id a minima, doloribus natus nihil fuga alias ut molestiae illum neque! Vero mollitia modi alias esse.</p>
			</main>
      </div>
		);
	}
}

export default Home;