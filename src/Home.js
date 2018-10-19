import React, { Component } from 'react';
import Header from './Header';
import './Home.css';
import SearchBar from './SearchBar';

class Home extends Component {

	state = {
		inputValue: ''
	}

	render(){

		return(
      <div>
      <Header />
			<main>
				<div>
					<div className="searchBar">
						<SearchBar inputValue={this.state.inputValue} lift={this.props.lift} blnHome={true}/>
					</div>
				</div>
				<p className="intro">Discover where your favorites movies have been filmed around the world with Once Upon A Place. <br/>
 					You could be surprised to find one near from you</p>
			</main>
      </div>
		);
	}
}

export default Home;