import React, {Component} from 'react';
import { Button, Typography } from "@material-ui/core";
import './ResultList.css';
import Expander from './Expander';

const NUMBER_OF_MOVIES_PER_PAGE = 5;

class ResultList extends Component {

    state = {
        currentNumberPage: 1,
        datas : []
    }

    transformDatasLocationInMovie = datas => {
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
            return res.filter(f => f.title === data.title && f.release_year === data.release_year);
        }

        for (let i=0; i<datas.length; i++) {
            data = datas[i];
            film = getFilm(res, data);
            if (!film.length) {
                add = {
                    title: data.title,
                    release_year: data.release_year,
                    locations: new Array(data.locations),
                    synopsis: synopsis,
                    shortSynopsis: synopsis.substring(0, 110) + '...'
                };
                res.push(add);
            } else {
                getFilm(res, data)[0].locations.push(data.locations);
            }
        }
        return res;
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
        const numberResultStart = (this.state.currentNumberPage - 1) * NUMBER_OF_MOVIES_PER_PAGE;
        let numberResultEnd =
            this.state.currentNumberPage * NUMBER_OF_MOVIES_PER_PAGE;
        if (numberResultEnd > this.state.datas.length) {
            numberResultEnd = this.state.datas.length;
        }
        //console.log(numberResultStart, numberResultEnd);
        const pageArray = this.state.datas.slice(numberResultStart, numberResultEnd);
  
        const haveResults = this.state.datas.length ? true : false;
        const isDisplayPrevious = this.state.currentNumberPage === 1 ? false : true;
        const isDisplayNext = numberResultEnd === this.state.datas.length ? false : true;
  
        // console.log("resultList", datas);
        return (
            <div className='cardContainer'>
                {
                    pageArray.map((e, i) => {
                        return (
                            <div key={'movie-' + i} className='card'>           
                                <Expander movie = {e}/>
                            </div>
                        )
                    })
                }
                <div className="center">
                    <Typography>
                    {haveResults
                        ? `${numberResultStart + 1} - ${numberResultEnd} on ${
                            this.state.datas.length
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


//<MediaCard locationMovie= {e}/>