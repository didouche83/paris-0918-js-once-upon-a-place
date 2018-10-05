import React, {Component} from 'react';
import MediaCard from './MediaCard';

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