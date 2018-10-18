import React, {Component} from 'react';
import Expander from './Expander';
import './ResultList.css';
const beginningURL = 'https://image.tmdb.org/t/p/w500';

class ResultList extends Component {

    //il faut faire un map sur un tableau de nos résultats de movie db pour avoir les noms de films, car chaque film est stocké dans une case de tableau
    // il faut qu'on ajoute ça à "res" le tableau de david, pour qu'on puisse filtrer en fonction des titres de film en disant que titre de movie db et faire le map dessus 
    // est égal au titre de san francisco et ensuite faire un map dessus pour envoyer à la vignette
    
    state ={
        joined: []
    }
    
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

        for (let i=0; i<datasSf.length; i++) {
            data = datasSf[i];
            film = getFilm(res, data);
            if (!film.length) { //équivaut à film.length===0
                add = {
                    title: data.title,
                    release_year: data.release_year,
                    locations: new Array(data.locations),
                    synopsis: synopsis,
                    //shortSynopsis: synopsis.substring(0, 110) + '...',
                    image: "http://www.ralentirtravaux.com/images/troie.jpg",

                    
                };
                res.push(add);
            } else {
                getFilm(res, data)[0].locations.push(data.locations); // si y'a un titre pareil, on push pour regrouper par film les lieux
            }
        }
        return res;
    };
        
        //arrayMovieDb.results.map(movie => resMovieDb.push(movie.poster_path))
        /*arrayMovieDb.map(item => {
            // const objectMovieInformations = {}
            // objectMovieInformations.poster_path = movie.results.map(line => line.poster_path)
            item[3].map(movieLine => res.push(movieLine.poster_path))
            
            console.log('hello', res)
        })*/
        //console.log('ola', resMovieDb)
    //     return res;        
        

    // };

    componentDidUpdate(){
        //const { movieInformations, locationsList} = this.props;
        const arrayMovieDb = this.props.movieInformations.results; //movieInformations.results
        const datas = this.transformDatasLocationInMovie(this.props.locationsList);
        const joinedRes = datas.map(movieSf => {
            const movieTitleEqual = arrayMovieDb.filter((movieDb)=>{
                return (movieDb.name === movieSf.title || movieDb.title === movieSf.title || movieDb.original_name === movieSf.title);
            })
            if (movieTitleEqual.length > 0) {
                movieSf.synopsis = movieTitleEqual[0].overview,
                movieSf.image = beginningURL + movieSf.backdrop_path;
            }
            return movieSf;
        });
        this.setState({joined : joinedRes})

    }
        
    render() {

       
        //console.log(this.props.movieInformations)
        //console.log('hi',this.props.movieInformations.results)
        // let arrayMovieDb = this.props.movieInformations.results
        //console.log('db', arrayMovieDb)
      
        
        
       

        
        
        // let datas = this.transformDatasLocationInMovie(this.props.locationsList);
        // let join = datas.concat(arrayMovieDb)
        // console.log('join', join)
        //console.log('db', arrayMovieDb)
        //console.log('olo', datas.title)
        // console.log("resultList", datas);
        return (
            
            <div className='cardContainer'>{
                this.state.joined.map(e =>{
                    
                    //return <p>Resultat: {e.title}</p>
                    return (
                        <div className='card'>
                            
                            <Expander movie={e} /*db={this.props.movieInformations}*//>
                        </div>
                    )
                })
            }</div>
        )
    }
}

export default ResultList;


//<MediaCard locationMovie= {e}/>