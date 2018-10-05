import React, {Component} from 'react';
import Thumbnail from './Thumbnail';

class ResultList extends Component {
    render() {
         console.log("resultList",this.props.locationsList);
        
        return (
            this.props.locationsList.map(e => {
                //return <p>Resultat: {e.title}</p>
                return <Thumbnail locationMovie= {e}/>
            })
        )
    }
}

export default ResultList;