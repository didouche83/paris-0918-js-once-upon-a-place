import React, {Component} from 'react';
import Expander from './Expander';
import './ResultList.css';

class ResultList extends Component {

    //il faut faire un map sur un tableau de nos résultats de movie db pour avoir les noms de films, car chaque film est stocké dans une case de tableau
    // il faut qu'on ajoute ça à "res" le tableau de david, pour qu'on puisse filtrer en fonction des titres de film en disant que titre de movie db et faire le map dessus 
    // est égal au titre de san francisco et ensuite faire un map dessus pour envoyer à la vignette
    
    let arrayMovieDb = []
    arrayMovieDb.push(datasMovieDb)


    transformDatasLocationInMovie = datas => {
        let res = [];
        datas.map(data => {

            const film = res.filter(f => f.title === data.title && f.release_year === data.release_year);
            if (!film.length) {
                const add = {};
                add.title = data.title;
                add.director = data.director;
                add.release_year = data.release_year;
                add.locations = new Array(data.locations)
                // add.synopsis = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
                // tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
                // quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
                // consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
                // cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
                // proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                // add.shortSynopsis = add.synopsis.substring(0, 110) + '...'  , this.props.movieInformations.results[0].poster_path, this.props.movieInformations.results[0].original_name
                res.push(add);

            } else {
                res.filter(f => f.title === data.title && f.release_year === data.release_year)[0].locations.push(data.locations);
            }

        })
        return res;

    };

        
    render() {

       
        console.log(this.props.movieInformations)
      
        
       

        
        
        let datas = this.transformDatasLocationInMovie(this.props.locationsList);
        //console.log(datas)
        // console.log("resultList", datas);
        return (
            
            <div className='cardContainer'>{
                datas.map(e => {
                    //return <p>Resultat: {e.title}</p>
                    return (
                        <div className='card'>
                            
                            <Expander movie = {e}/>
                        </div>
                    )
                })
            }</div>
        )
    }
}

export default ResultList;


//<MediaCard locationMovie= {e}/>