import React, {Component} from 'react';
import MediaCard from './MediaCard';
import './ResultList.css';

class ResultList extends Component {

    transformDatas = datas => {
        let res = [];
        datas.map(data => {

            const film = res.filter(f => f.title === data.title && f.release_year === data.release_year);
            if (!film.length) {
                const add = {};
                add.title = data.title;
                add.release_year = data.release_year;
                add.locations = new Array(data.locations);
                res.push(add);
            } else {
                res.filter(f => f.title === data.title && f.release_year === data.release_year)[0].locations.push(data.locations);
            }

        })
        return res;
    };

    render() {
        let datas = this.transformDatas(this.props.locationsList);
        // console.log("resultList", datas);
        return (
            <div className='cardContainer'>{
                datas.map(e => {
                    //return <p>Resultat: {e.title}</p>
                    return (
                        <div className='card'>
                            <MediaCard locationMovie= {e}/>
                        </div>
                    )
                })
            }</div>
        )
    }
}

export default ResultList;