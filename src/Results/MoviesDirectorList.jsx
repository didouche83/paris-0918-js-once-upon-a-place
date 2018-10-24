import React from 'react';
import axios from 'axios';

import Test from './Test';

class MoviesDirectorList extends React.Component {

    state = {
        directorName: this.props.directorName,
        moviesDirectorList: []
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/search/person?api_key=101524b9ef56aa6595b105469939da4d&language=en-US&query=${this.state.directorName}&page=1&include_adult=false`)
        .then(json => this.setState({ moviesDirectorList : json.data.results[0].known_for}))
        .then(() => console.log('resultok?', this.state.moviesDirectorList))
    }

    render(){
        return(
                this.state.moviesDirectorList.map((information)=>{
                    return(
                        <Test result={information}/>
                    )

                })
        )
            

    }
}

export default MoviesDirectorList;