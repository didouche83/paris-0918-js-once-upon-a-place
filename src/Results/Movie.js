import React, { Component } from 'react';
import Expander from './Expander';
import MoviesDirectorList from './MoviesDirectorList';
import './Movie.css';
const beginningURL = 'https://image.tmdb.org/t/p/w500'; //l'API coupe son URL pour les affiches, il faut rajouter ça devant


class Movie extends Component {


    state = {
        movie : this.props.movieSf //on met dans le state le tableau de valeurs envoyées par Results (lieux par film de SF)
    };

    joinAPIsResults = async () => {
        const movieJoined = this.state.movie;
        //appel à l'API MovieDB en fonction du titre de l'API de SF
        const apiCallMovieDB = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=101524b9ef56aa6595b105469939da4d&language=en-US&query=${movieJoined.title}&include_adult=false`)
        const moviesDbList = await apiCallMovieDB.json();
        
        const movieTitleEqual = moviesDbList.results; //ici on récupére toutes les infos de MovieDb en fonction du titre de l'API de SF

        if (apiCallMovieDB.ok) { //si l'appel de l'API est ok
            if (movieTitleEqual.length > 0) { //et si j'ai bien un titre
                movieJoined.synopsis = movieTitleEqual[0].overview; //alors je remplace le synopsis initialisé dans Result par celui de MovieDb
                movieJoined.image = beginningURL + movieTitleEqual[0].poster_path;//et je remplace l'image initialisée dans Results par celle de MovieDb

                this.setState({
                    movie: movieJoined //je remplis mon state avec le nouveau tableau rempli des données des 2 APIs
                })
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
                <Expander movie={this.state.movie} />
                <MoviesDirectorList directorName={this.state.movie.director} />
            </div>
        )

    }
}

export default Movie;