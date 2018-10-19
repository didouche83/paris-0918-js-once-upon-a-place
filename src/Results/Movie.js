import React, { Component } from 'react';
import Expander from './Expander';
import './Movie.css';
const beginningURL = 'https://image.tmdb.org/t/p/w500';

class Movie extends Component {


    state = {
        movie : this.props.movieSf
    };

    joinAPIsResults = async () => {
        const movieJoined = this.state.movie;
        console.log('movieJoined', movieJoined);
        const apiCallMovieDB = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=101524b9ef56aa6595b105469939da4d&language=en-US&query=${movieJoined.title}&include_adult=false`)
        const moviesDbList = await apiCallMovieDB.json();
        console.log('moviesDbList', moviesDbList);
        const movieTitleEqual = moviesDbList.results;
        if (apiCallMovieDB.ok) {
            if (movieTitleEqual.length > 0) {
                movieJoined.synopsis = movieTitleEqual[0].overview;
                movieJoined.image = beginningURL + movieTitleEqual[0].poster_path;
                this.setState({
                    movie: movieJoined
                })
            }
        }
            
    }

    componentDidMount() {
        this.joinAPIsResults()
        console.log('movie', this.state.movie) // là y'a rien
    }


    render() {

        return (
            <div className='card'>
                <Expander movie={this.state.movie} />
            </div>
        )

    }
}

export default Movie;

// const joinedRes = datas.map(movieSf => {
//     const movieDb = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=101524b9ef56aa6595b105469939da4d&language=en-US&query=${movieSf.title}&include_adult=false`)
//     .then(json =>  this.setState({
//         joined: json,
//         isLoaded: true
//     //     res_Movie_Db: this.movieDb.ok ? joined : []
//     }))