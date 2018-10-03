import React, {Component} from 'react';
import Thumbnail from './Thumbnail';
import MediaCard from './MediaCard';
import Dialog from './Dialog';

class ResultList extends Component {
    render() {
         console.log("resultList",this.props.locationsList);
        
        return (
            this.props.locationsList.map(e => {
                //return <p>Resultat: {e.title}</p>
                return (
                	<div>
                		<MediaCard locationMovie= {e}/>
                	</div>
                )
            })
        )

    }
}

export default ResultList;