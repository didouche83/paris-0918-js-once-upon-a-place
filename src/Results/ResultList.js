import React, {Component} from 'react';
import MediaCard from './MediaCard';
import Expander from './Expander';
import './ResultList.css';

class ResultList extends Component {
    render() {
         console.log("resultList",this.props.locationsList);
        
        return (
            <div className='cardContainer'>{
                this.props.locationsList.map(e => {
                    //return <p>Resultat: {e.title}</p>
                    return (
                        <div className='card'>
                            
                            <Expander locationMovie= {e}/>
                        </div>
                    )
                })
            }</div>
        )
    }
}

export default ResultList;


//<MediaCard locationMovie= {e}/>