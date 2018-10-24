import React from 'react';
import axios from 'axios';

import Test from './Test';


class MoviesDirectorList extends React.Component {

    state = {
        directorName: this.props.directorName,
        title: this.props.title,
        moviesDirectorList: []
    }

    componentDidMount() {
        axios.get(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=director%20like%20%27%25${this.state.directorName}%25%27&$limit=100`)
            .then(json => this.setState({ moviesDirectorList : json.data}))
    }

    render() {

        const uniq = [...new Set(this.state.moviesDirectorList.map(e => e.title))]

        const resultUniq = uniq.filter((element)=>{
            return(element !== this.state.title)
        })
            return (
                resultUniq.map((information) => {
                return (
                    <Test result={information} />
                )})
            )
    }
}

export default MoviesDirectorList;