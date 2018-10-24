import React, { Component } from 'react';
import Expander from './Expander';
import './Movie.css';
import axios from 'axios';

const beginningURL = 'https://image.tmdb.org/t/p/w500'; //l'API coupe son URL pour les affiches, il faut rajouter ça devant
const API_KEY = '101524b9ef56aa6595b105469939da4d';

class Movie extends Component {


  state = {
    movie: this.props.movieSf, //on met dans le state le tableau de valeurs envoyées par Results (lieux par film de SF)
    youtubeKey: undefined
  };

  getYoutubeKey = () => {
    const url = `https://api.themoviedb.org/3/movie/${this.state.movie.id}/videos?api_key=${API_KEY}&language=en-US`;
    axios.get(url)
      // .then(res => console.log('key', res.data.results[0].key))
      .then(res =>
        this.setState({
          youtubeKey: res.data.results[0].key
        })
      )
      .catch(res => console.log(res))
  }

  joinAPIsResults = async () => {
    const movieJoined = this.state.movie;
    //appel à l'API MovieDB en fonction du titre de l'API de SF
    const apiCallMovieDB = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieJoined.title}&include_adult=false`)
    const moviesDbList = await apiCallMovieDB.json();

    const movieTitleEqual = moviesDbList.results; //ici on récupére toutes les infos de MovieDb en fonction du titre de l'API de SF
    if (apiCallMovieDB.ok) { //si l'appel de l'API est ok
      if (movieTitleEqual.length > 0) { //et si j'ai bien un titre
        movieJoined.synopsis = movieTitleEqual[0].overview; //alors je remplace le synopsis initialisé dans Result par celui de MovieDb
        movieJoined.image = beginningURL + movieTitleEqual[0].poster_path;//et je remplace l'image initialisée dans Results par celle de MovieDb
        movieJoined.id = movieTitleEqual[0].id;

        this.setState({
          movie: movieJoined //je remplis mon state avec le nouveau tableau rempli des données des 2 APIs
        })

        this.getYoutubeKey();
      }
    }
  }

  componentDidMount() {
    this.joinAPIsResults() //une fois que le composant est chargé, fait appel à la fonction pour joindre les résultats des 2 APIs
  }


  render() {

    return (
      <div className='card'>
        {/* j'envoie les infos du state pour les afficher dans expander */}
        <Expander
          youtubeKey={this.state.youtubeKey}
          movie={this.state.movie}
        />
      </div>
    )

  }
}

export default Movie;