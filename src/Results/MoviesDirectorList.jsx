import React from 'react';
import axios from 'axios';

import Test from './Test';


class MoviesDirectorList extends React.Component {

    state = {
        directorName: this.props.directorName,
        moviesDirectorList: []
    }

    // transformDatasLocationInMovie = () => {
    //     let resultOneMovie = [];
    //     let data = {};
    //     let film = []; //ici on initialise ce dont on va avoir besoin dans la fonction (de res à synopsis)
    //     let add = {};
    //     const getFilm = (resultOneMovie, data) => {
    //         return resultOneMovie.filter(f => f.title === data.title && f.release_year === data.release_year);//(on compare le nouveau titre de film )
    //     } //qui est inséré dans data avec ceux qui sont déjà dans res (les films) pour voir s'ils ont les mm titres et la mm année pour
    //     //les regrouper par lieux de tournage

    //     for (let i = 0; i < this.moviesDirectorList.length; i++) {
    //         data = this.moviesDirectorList[i];
    //         film = getFilm(resultOneMovie, data);
    //         if (!film.length) { //équivaut à film.length===0
    //             add = {
    //                 title: data.title,
    //                 release_year: data.release_year,
    //             };
    //             resultOneMovie.push(add);
    //         } else {
    //             getFilm(resultOneMovie, data)[0].locations.push(data.locations); // si y'a un titre pareil, on push pour regrouper par film les lieux
    //         }
    //     }
    //     return resultOneMovie;
    // };

    componentDidMount() {
        
        axios.get(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=director%20like%20%27%25${this.state.directorName}%25%27&$limit=100`)
            .then(json => this.setState({ moviesDirectorList : json.data}))
            .then(() => console.log('resulthere', this.state.moviesDirectorList))
        
        
            

        // axios.get(`https://api.themoviedb.org/3/search/person?api_key=101524b9ef56aa6595b105469939da4d&language=en-US&query=${this.state.directorName}&page=1&include_adult=false`)
        // .then(json => this.setState({ moviesDirectorList : json.data.results[0].known_for}))
        // .then(() => console.log('resultok?', this.state.moviesDirectorList))
    }

    render() {

        let resultMoviesDirectorList = new Set(this.state.moviesDirectorList)
        console.log('ola', resultMoviesDirectorList)
        const uniq = [...new Set(this.state.moviesDirectorList.map(e => e.title))]
        console.log('uniq', uniq)



             /*   uniq.map((information) => {
                    return (
                        <Test result={information} />
                    )

            })*/


            return (
                uniq.map((information) => {
                return (
                    <Test result={information} />
                )})
            )
    }
}

export default MoviesDirectorList;

// for (let i = 0; i < moviesDirectorList.length; i++) {
//     if(element.title[i] =! element.title[i+1]){
//         return true
//     }
    
// }




// .filter((element)=>{
//     element.title =! element.title ? true : false