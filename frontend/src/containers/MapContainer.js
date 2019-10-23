import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };  

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          caches: [
                  {latitude: 47.6077, longitude: -122.3355},
                  {latitude: 37.7953, longitude: -122.4067},
                  {latitude: -33.867886, longitude: -63.987},
                  {latitude: 51.848637, longitude: -0.55462}
                ]
        }
      };

      displayMarkers = () => {
        return this.state.caches.map((cache, index) => {
          return <Marker key={index} id={index} position={{
           lat: cache.latitude,
           lng: cache.longitude
         }}
         onClick={() => console.log("yoo cached me!")} />
        })
      }

    render() {
        return (
            <FindLocation />
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            >
                {this.displayMarkers()}
                {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
            </Map>
        );
      }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCAfBTkrlt57CanfbaWZK9YpYOjCfLHmo4'
  })(MapContainer);