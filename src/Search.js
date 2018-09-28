import React, { Component } from 'react';
import './Search.css';

const Search = () => (
	<main>
		<form>
			<label htmlFor="searchInput"></label>
			<div className="inputs">
				<input type="text" id="searchInput" placeholder="Search movie..."/>
				<input type="submit" value="Search"/>
			</div>
		</form>
		<div className="intro">
			<p>Discover where your favorites movies have been filmed around the world with Once Upon A Place </p>
			 <small>You could be surprised to find one near from you</small>
			 </div>
	</main>
);

export default Search;