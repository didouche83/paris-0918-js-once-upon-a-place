import React, { Component } from 'react';

class Thumbnail extends Component{
	render(){
		return(
			<div>
				<h3>{this.props.title}</h3>
				<img className="affiche" src={this.props.affiche} alt={this.props.title} />
				<p className="description">{this.props.descritpion}</p>
				<button onClick={this.handle.click}>More informations</button>				
			</div>
			);
	}
};

export default Thumbnail;