import React from "react";
import './Thumbnail.css';

const Thumbnail = ({title, writer, release_year, locations}) => (
	<article>
		<img src="https://via.placeholder.com/100x150" alt ={title}/>
		<aside>
			<h4>{title}</h4>
			<ul>
				<li><em>Writer : </em>{writer}</li>
				<li><em>released : </em>{release_year}</li>
				<li><em>Shooting place : </em>{locations}</li>
			</ul>
		</aside>
	</article>
);

export default Thumbnail;