import React from 'react';
import './App.css';
import SimpleMap from "./Components/Map.jsx"
import Map from "./Components/DirectionMap.jsx"

const mapKey = process.env.REACT_APP_MAP;



function App(props) {
  
  const places = [
    {latitude: 43.6503146,longitude: -79.3851609},
    {latitude: 27.9947147,longitude: -82.5943645},
    {latitude: 31.2304,longitude: -81.4387899}
  ]

  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = props;

  return (
    <Map
      googleMapURL={
        'https://maps.googleapis.com/maps/api/js?key=' +
        mapKey +
        '&libraries=geometry,drawing,places'
      }
      markers={places}
      loadingElement={loadingElement || <div style={{height: `100%`}}/>}
      containerElement={containerElement || <div style={{height: "80vh"}}/>}
      mapElement={mapElement || <div style={{height: `100%`}}/>}
      defaultCenter={defaultCenter || {lat: 25.798939, lng: -80.291409}}
      defaultZoom={defaultZoom || 11}
      travelMode='Flying'
    />

  );
}

export default App;
