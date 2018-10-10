import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import './Home.css';

class Home extends Component {
	state = {
		titles:[]
	}

  autoComp = async (e) =>{
    const input = e.target.value;
    const url = `https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25${input}%25'&$limit=5`
    const call_api = await fetch(url);
		const data = await call_api.json();
		const titles = data.map(x=>x.title).filter((x,i,t)=>x!=t[i-1]);
			this.setState({
				titles:input.length?titles:[]
			})
	}
	
	autoCompFill = (e) =>{
		document.getElementById('searchInput').value = e.target.innerHTML;
	}

	render(){
		return(
      <div>
      <Header />
			<main>
				<form>
					<label htmlFor="searchInput"></label>
					<div className="inputs">
						<input onKeyUp={this.autoComp} type="text" id="searchInput" autocomplete="off" placeholder="Search movie..."/>
						{this.state.titles.length > 0 &&
							<div className='autoCompRes'>
								{this.state.titles.map((title,i) => 
										<div
											className='autoCompLig'
											key={`autoComp-${i}`}
											onClick={this.autoCompFill}
										>{title}</div>
									) 
								}
							</div>
						}
						<NavLink to="/Results/List"> 
              <input type="submit" value="Search"/>
            </NavLink>
					</div>
				</form>
				<p className="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem eum rerum pariatur, id a minima, doloribus natus nihil fuga alias ut molestiae illum neque! Vero mollitia modi alias esse.</p>
			</main>
      </div>
		);
	}
}

export default Home;