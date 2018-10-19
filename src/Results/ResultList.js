import React, {Component} from 'react';
import axios from 'axios'
import Expander from './Expander';
import './ResultList.css';
const beginningURL = 'https://image.tmdb.org/t/p/w500';

class ResultList extends Component {

    //il faut faire un map sur un tableau de nos résultats de movie db pour avoir les noms de films, car chaque film est stocké dans une case de tableau
    // il faut qu'on ajoute ça à "res" le tableau de david, pour qu'on puisse filtrer en fonction des titres de film en disant que titre de movie db et faire le map dessus 
    // est égal au titre de san francisco et ensuite faire un map dessus pour envoyer à la vignette
    
    state = {
        joined: [],
        isLoaded: false
    };
    
   

    joiningResults = async () => {
        const datas = this.transformDatasLocationInMovie(this.props.locationsList); 
        //console.log('help', datas) 
        const joinedRes = await datas.map(async movieSf => {
            const movieDb =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=101524b9ef56aa6595b105469939da4d&language=en-US&query=${movieSf.title}&include_adult=false`)
            //console.log('sf', movieSf.title)
            // console.log('salut ',movieDb.data.results[0]);
            const movieTitleEqual = movieDb.data.results;

            movieSf.synopsis = movieTitleEqual[0].overview,
            movieSf.image = beginningURL + movieTitleEqual[0].poster_path;
            //console.log('movieSf', movieSf)
            return movieSf

        })
        // console.log('movieDb', movieDb)
        // console.log("joinedRes1 ",joinedRes)
      
        console.log('movieSf', joinedRes) // dès qu'on sort de la map, les valeurs sont inconnues, du à l'asynchrone surement


        this.setState({
            joined: joinedRes, //si je mets joinedRes, ça m'indique promise
            isLoaded: true
        //     res_Movie_Db: this.movieDb.ok ? joined : []
        })
        console.log('stat', this.state.joined) // là y'a

    }

    componentDidMount(){
        this.joiningResults()
        console.log('stat2', this.state.joined) // là y'a rien
    }  
    
    
    render() {
        console.log('poupidou', this.datas)
       console.log('deeeefefef', this.state.joined)
       
            return (
                
                <div className='cardContainer'>{
                    this.state.joined.map((e, index) =>{
                        return (
                            <div key={index} className='card'>                                
                                <Expander movie={e} />
                            </div>
                        )
                    })
                }</div>
            )
       
    }
}

export default ResultList;

// const joinedRes = datas.map(movieSf => {
//     const movieDb = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=101524b9ef56aa6595b105469939da4d&language=en-US&query=${movieSf.title}&include_adult=false`)
//     .then(json =>  this.setState({
//         joined: json,
//         isLoaded: true
//     //     res_Movie_Db: this.movieDb.ok ? joined : []
//     }))