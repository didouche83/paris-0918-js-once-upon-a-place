
import React, { Component } from 'react';
import './ResultList.css';
import Movie from './Movie'
import { Button, Typography } from "@material-ui/core";

const NUMBER_OF_MOVIES_PER_PAGE = 5;

class ResultList extends Component {

    state = {
        currentNumberPage: 1,
        moviesList: this.props.moviesList
    }

    handlerButtonPrevious = () => {
        // - 1
        if (this.state.currentNumberPage > 1) {
          this.setState({ currentNumberPage: this.state.currentNumberPage - 1 });
        }
    };
    
    handlerButtonNext = () => {
        // + 1
        if (
            this.state.moviesList.length / NUMBER_OF_MOVIES_PER_PAGE >
            this.state.currentNumberPage
        ) {
            this.setState({ currentNumberPage: this.state.currentNumberPage + 1 });
        }

    };

    handlerButtonPrevious = () => {
        // - 1
        if (this.state.currentNumberPage > 1) {
          this.setState({ currentNumberPage: this.state.currentNumberPage - 1 });
          console.log("dec");
        }
    };
    
    handlerButtonNext = () => {
        // + 1
        if (
            this.state.datas.length / NUMBER_OF_MOVIES_PER_PAGE >
            this.state.currentNumberPage
        ) {
            console.log("inc");
            this.setState({ currentNumberPage: this.state.currentNumberPage + 1 });
        }
    };

    componentDidMount = () => {
        this.setState({
            datas: this.transformDatasLocationInMovie(this.props.locationsList)
        });
    }

    render() {

        const { currentNumberPage, moviesList } = this.state;
        const numberResultStart = (currentNumberPage - 1) * NUMBER_OF_MOVIES_PER_PAGE;
        let numberResultEnd =
            currentNumberPage * NUMBER_OF_MOVIES_PER_PAGE;
        if (numberResultEnd > moviesList.length) {
            numberResultEnd = moviesList.length;
        }
        const pageArray = moviesList.slice(numberResultStart, numberResultEnd);
        console.log('hihi', numberResultStart, numberResultEnd)
        const haveResults = moviesList.length ? true : false;
        const isDisplayPrevious = currentNumberPage === 1 ? false : true;
        const isDisplayNext = numberResultEnd === moviesList.length ? false : true;

        return (
            <div className='cardContainer'>
                {
                    pageArray.map((e, i) => {
                        return (
                            <div key={'movie-' + i} className='card'>
                                <Movie movieSf={e} />
                            </div>
                        )
                    })
                }
                <div className="center">
                    <Typography>
                    {haveResults
                        ? `${numberResultStart + 1} - ${numberResultEnd} on ${
                            moviesList.length
                        } movies`
                        : "No result found"}
                    </Typography>
                    <Button
                            onClick={this.handlerButtonPrevious}
                            variant="outlined"
                            style={
                            isDisplayPrevious
                                ? { visibility: "visible" }
                                : { visibility: "hidden" }
                            }
                            >
                            {"\u003C"}
                        </Button>
                        <Button
                            onClick={this.handlerButtonNext}
                            variant="outlined"
                            style={
                            isDisplayNext
                                ? { visibility: "visible" }
                                : { visibility: "hidden" }
                            }
                        >
                            {"\u003E"}
                    </Button>
                </div>
            </div>
        )

    }
}

export default ResultList;

