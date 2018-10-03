import React, { Component } from 'react';

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

	// 	<h3>{this.props.locationMovie.title}</h3>
			// 	<img className="affiche" src={this.props.affiche} alt={this.props.locationMovie.title} />
			// 	<p className="description">{this.props.description}</p>
			// 	<button onClick={this.togglePopup.bind(this)}>More informations</button>		
			// </div>


	//handleClick = () => {
		//console.log({this.props})
	};*/
	render() {
		console.log(this.props.locationMovie)
		//console.log('coucou')
		return(
			
			<div>
				<h3>{this.props.locationMovie.title}</h3>
			 	<p className="location">{this.props.locationMovie.locations}</p>
			 	<p className="year">{this.props.locationMovie.release_year}</p>		
			</div>

		
		);
	}
};

export default Thumbnail;