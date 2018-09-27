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
		<p className="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem eum rerum pariatur, id a minima, doloribus natus nihil fuga alias ut molestiae illum neque! Vero mollitia modi alias esse.</p>
	</main>
);

export default Search;