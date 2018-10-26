import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import logo from "../images/logoCamera.svg";
import axios from "axios";

import "./Map.css";

const myIcon = L.icon({
  iconUrl: logo,
  iconSize: [30, 50],
  iconAnchor: [18, 50],
  popupAnchor: [-3, -42]
});

const ApiKey = "a63e4c59d44644838724899d2664e7fd";
//const ApiKey = "c67cca421bab4c51b6817fc5fab880b8";

class SimpleMap extends Component {
  state = {
    lat: 37.763027,
    lng: -122.487701,
    zoom: 12,

    movies: this.props.movieSf,
    isLoaded: false,

    locations: []
  };

  componentDidMount = async () => {
    
    if (!this.props.moviesList[0] && !this.props.moviesList[0].locations) return
    const locations = await this.props.moviesList[0].locations.map(async e => {


      let re = /(&)|(' ')/;
      let el = e.replace(re, '+');

      const geo = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${el}+sanfrancisco+us&key=${ApiKey}`);
      return await {
        //title: e.title,
        lat: geo.data.results[0].geometry.lat,
        lng: geo.data.results[0].geometry.lng
      }

    });
    Promise
    .all(locations)
    .then(locations => {
      console.log('LOCATION PROMISE',locations)
      this.setState({
      isLoaded: true,
      locations: locations
    },() => console.log('STATE PROMISE',this.state))
  }
    );
  
  }

 

  render() {
    const { isLoaded, locations } = this.state;
    const position = [this.state.lat, this.state.lng];
   
    if (!locations) return null;
    return (
      <div className="Map-container">
        <Map className="map" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {isLoaded && locations.map((e,i) => (
              <Marker key={i} className="Icon" position={[e.lat, e.lng]} icon={myIcon}>
                <Popup>{e.title}</Popup>
              </Marker>
            ))}
        </Map>
      </div>
    );
  }
}



export default SimpleMap;
