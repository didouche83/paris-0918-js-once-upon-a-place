import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {

	render(){
		const { footerColor, displayFooter } = this.props;
		return(
			<footer className="Footer" style={{backgroundColor: footerColor, display: displayFooter}}>
				<p>App developped by xxxxx.</p>
				<p><a href = "mailto:xxxx@gmail.com">Email : xxxx@gmail.com</a></p>
						{<NavLink className="footerNav" to = "/team">Team</NavLink>}
			</footer>
		);
	}
}

export default Footer;