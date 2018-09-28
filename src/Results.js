import React, { Component } from 'react';
import Thumbnail from "./Thumbnail";

const locations = [
    {
        "actor_1": "Amy Poehler",
        "director": "Dean Holland",
        "distributor": "NBC Universal Media, LLC",
        "locations": "Larkin & Fulton",
        "production_company": "NBC Universal Media, LLC",
        "release_year": "2014",
        "title": "Parks and Recreation",
        "writer": "Greg Daniels"
    },
    {
        "actor_1": "Amy Poehler",
        "director": "Dean Holland",
        "distributor": "NBC Universal Media, LLC",
        "locations": "Embarcadero & Market",
        "production_company": "NBC Universal Media, LLC",
        "release_year": "2014",
        "title": "Parks and Recreation",
        "writer": "Greg Daniels"
    },
    {
        "actor_1": "Kara Hayward",
        "actor_2": "Mira Sorvino",
        "actor_3": "Saffron Burrows",
        "director": "Noah Pritzker",
        "locations": "1536 Noe St.",
        "production_company": "Frederick & Ashbury, LLC.",
        "release_year": "2015",
        "title": "Quitters",
        "writer": "Noah Pritzker"
    },
    {
        "actor_1": "Robin Williams",
        "actor_2": "Philip Seymour Hoffman",
        "director": "Tom Shadyac",
        "distributor": "Universal Pictures",
        "fun_facts": "An artificial island, Treasure Island was created for the 1939 Golden Gate International Exposition, and is named after the novel by Robert Louis Stevenson, a one-time San Francisco resident.",
        "locations": "Treasure Island",
        "production_company": "Bungalow 78 Productions",
        "release_year": "1998",
        "title": "Patch Adams",
        "writer": "Steve Oedekerk"
    },
    {
        "actor_1": "Robin Williams",
        "actor_2": "Philip Seymour Hoffman",
        "director": "Tom Shadyac",
        "distributor": "Universal Pictures",
        "fun_facts": "The hotel was destroyed in the 1906 earthquake and fire, had to be rebuilt, and was reopened in 1909. ",
        "locations": "Sheraton Palace Hotel (639 Market Street)",
        "production_company": "Bungalow 78 Productions",
        "release_year": "1998",
        "title": "Patch Adams",
        "writer": "Steve Oedekerk"
    },
    {
        "actor_1": "Alicia Witt",
        "actor_2": "Harvey Fierstein",
        "director": "Matthew Huffman",
        "distributor": "Buena Vista Pictures",
        "fun_facts": "The Conservatory, unveiled in 1879, is the oldest public conservatory in the Western Hemisphere.",
        "locations": "Conservatory of Flowers (Golden Gate Park)",
        "production_company": "The Bubble Factory",
        "release_year": "2000",
        "title": "Playing Mona Lisa",
        "writer": "Marni Freedman"
    },
    {
        "actor_1": "Kara Hayward",
        "actor_2": "Mira Sorvino",
        "actor_3": "Saffron Burrows",
        "director": "Noah Pritzker",
        "locations": "24 Hill St.",
        "production_company": "Frederick & Ashbury, LLC.",
        "release_year": "2015",
        "title": "Quitters",
        "writer": "Noah Pritzker"
    },
];

class Results extends Component {
    render(){
        return(
            <div>
                {locations.map(loc =>
                    (<Thumbnail{...loc}/>
                ))}
            </div>
        );
    }
}

export default Results;