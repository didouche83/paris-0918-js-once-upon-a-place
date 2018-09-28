import React, { Component } from 'react';

class Thumbnail extends Component{
	render(){
		return(
			<article>
				<img src="" alt ={this.prop.title}/>
				<aside>
					<h3>{this.prop.title}</h3>
					<hr/>
					<ul>
						<li>Auteur : {this.prop.writer}</li>
						<li>Sorti en : {this.prop.release_year}</li>
					</ul>
				</aside>
			</article>
		);
	}
}

export default Thumbnail;