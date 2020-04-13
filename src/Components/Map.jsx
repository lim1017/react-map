import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const mapKey = process.env.REACT_APP_MAP;


const apiIsLoaded = (map, maps) => {
  if (map) {
    console.log('asdfsafd')

  }
};



function SimpleMap (props) {

 
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapKey }}
          defaultCenter={props.center || {lat: 43.6532, lng: -79.3832}}
          defaultZoom={props.zoom || 11}
          yesIWantToUseGoogleMapApiInternals
         onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
          
        >
          <AnyReactComponent
            lat={43.65}
            lng={-79.3832}
            text="My Marker"
          />


          <AnyReactComponent
            lat={43.77}
            lng={-79.22}
            text="My Marker2"
          />
        </GoogleMapReact>
      </div>
    );
  
}
 
export default SimpleMap;
