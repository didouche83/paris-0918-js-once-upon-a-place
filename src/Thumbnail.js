import React from "react";

const Thumbnail = ({title, writer, release_year}) => (
	<article>
		<img src="" alt =""/>
		<aside>
			<h3>{title}</h3>
			<hr/>
			<ul>
				<li>Auteur : {writer}</li>
				<li>Sorti en : {release_year}</li>
			</ul>
		</aside>
	</article>
);

export default Thumbnail;