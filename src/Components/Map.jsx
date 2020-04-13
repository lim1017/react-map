import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const mapKey = process.env.REACT_APP_MAP;


class SimpleMap extends Component {




  static defaultProps = {
    center: {
      lat: 43.6532,
      lng: -79.3832
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
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
}
 
export default SimpleMap;
