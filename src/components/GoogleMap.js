import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {   // this.refs.map tells GoogleMaps WHERE to render an embedded map
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return <div ref="map" />;    // Anywhere else in the component, you can reference the div created here by referring to this.refs.map
  }

}

export default GoogleMap;