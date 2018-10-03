import React, { Component } from 'react';
import Results from './Results/Results'

class Thumbnail extends Component{
	/*constructor() {
    	super();
    	this.state = {
      		showPopup: false
      	};
    }

    togglePopup() {
    	this.setState({showPopup: !this.state.showPopup});
    }

	//handleClick = () => {
		//console.log({this.props})
	};*/
	render() {
		//console.log({this.props.locationMovie})
		return(
			<p>blablabla</p>
			/*<div>
				<h3>{this.props.locationMovie.title}</h3>
				<img className="affiche" src={this.props.affiche} alt={this.props.locationMovie.title} />
				<p className="description">{this.props.description}</p>
				<button onClick={this.togglePopup.bind(this)}>More informations</button>		
			</div>*/
		);
	}
};

export default Thumbnail;