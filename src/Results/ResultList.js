import React, {Component} from 'react';
import Thumbnail from './Thumbnail';

class ResultList extends Component {
    render() {
        // console.log(this.props.locationsList);
        
        return (
            this.props.locationsList.map(e => {
                // return <p>Resultat: {e.title}</p>
                <Thumbnail locationMovie= {e}/>
            })
        )

    }
}

export default ResultList;