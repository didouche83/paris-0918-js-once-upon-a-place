import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import ResultList from './ResultList';
import SimpleMap from './Map';
import HeaderResults from './HeaderResults';
import './Results.css';
import Movie from './Movie'

class Results extends Component {
  state = {
    // locationsList: [],
    isLoaded: false,
    moviesList: [],
    value: 0
  };

  searchLoc = async (iValue) => {

    const api_call_Sf = await fetch(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=title like '%25${iValue}%25'&$limit=50`);

    const datasSf = await api_call_Sf.json();
    datasSf.sort((data1, data2) => (data1.title < data2.title ? -1 : 1));

    const resMoviesList = this.transformDatasLocationInMovie(datasSf);

    this.setState({
      // locationsList: api_call_Sf.ok ? datasSf : [],
      moviesList: api_call_Sf.ok ? resMoviesList : [],
      isLoaded: true
    })
  };


  //il faut faire un map sur un tableau de nos résultats de movie db pour avoir les noms de films, car chaque film est stocké dans une case de tableau
  // il faut qu'on ajoute ça à "res" le tableau de david, pour qu'on puisse filtrer en fonction des titres de film en disant que titre de movie db et faire le map dessus 
  // est égal au titre de san francisco et ensuite faire un map dessus pour envoyer à la vignette
  transformDatasLocationInMovie = datasSf => {
    let res = [];
    let data = {};
    let film = [];
    let add = {};
    const synopsis = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" +
      "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" +
      "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
      "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
      "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const getFilm = (res, data) => {
      return res.filter(f => f.title === data.title && f.release_year === data.release_year);//(on compare le nouveau titre de film )
    } //qui est inséré dans data avec ceux qui sont déjà dans res (les films) pour voir s'ils ont les mm titres et la mm année pour
    //les regrouper par lieux de tournage

    for (let i = 0; i < datasSf.length; i++) {
      data = datasSf[i];
      film = getFilm(res, data);
      if (!film.length) { //équivaut à film.length===0
        add = {
          title: data.title,
          release_year: data.release_year,
          locations: new Array(data.locations),
          synopsis: synopsis,
          director: data.director,
          image: "http://www.ralentirtravaux.com/images/troie.jpg"
        };
        res.push(add);
      } else {
        getFilm(res, data)[0].locations.push(data.locations); // si y'a un titre pareil, on push pour regrouper par film les lieux
      }
    }
    return res;
  };

  handleChange = (_, iValue) => {
    this.setState({ value: iValue });

  };

  componentDidMount() {
    this.searchLoc(this.props.inputValue)
  };

  render() {
    const { value } = this.state;
    if (this.state.isLoaded) {
      if (this.state.moviesList.length > 0) {
        return (
          <div className="Results">
            <div className='resHeader'>
              <HeaderResults inputValue={this.props.inputValue} searchLoc={this.searchLoc} />
            </div>

            <div className='resContent'>
              <div className="mobileOnly">
                <div>
                  <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} centered>
                      <Tab label="List" />
                      <Tab label="Map" />
                    </Tabs>
                  </AppBar>
                  {value === 0 && <div className='cardContainer'>{
                    this.state.moviesList.map((el, i) => <Movie key={i} movieSf={el} />)
                  }</div>}
                  {value === 1 && <SimpleMap />}
                </div>
              </div>
              <div className="desktopOnly">

                <div className='cardContainer'>{
                  this.state.moviesList.map((el, i) => <Movie key={i} movieSf={el} />)
                }</div>
                <SimpleMap />
              </div>
            </div>
          </div>
        );
      } else {
        return <h2>Sorry! Nothing was found!</h2>
      }
    } else {
      return <h2 className='loading'>Loading...</h2>
    }
  }
}

export default Results;





