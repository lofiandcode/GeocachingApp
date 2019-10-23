import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import FindLocation from '../components/FindLocation'

const mapStyles = {
    width: '100%',
    height: '100%',
  };  

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          caches: [
                  {lat: 47.6077, lng: -122.3355},
                  {lat: 37.7953, lng: -122.4067},
                  {lat: -33.867886, lng: -63.987},
                  {lat: 51.848637, lng: -0.55462}
                ]
        }
      };

      displayMarkers = () => {
        return this.state.caches.map((cache, index) => {
          return <Marker key={index} id={index} position={{
                    lat: cache.lat,
                    lng: cache.lng
         }}
         onClick={() => console.log("yoo cached me!")} />
        })
      }

    render() {
        return (
          <div>
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
          </div>
        );
      }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCAfBTkrlt57CanfbaWZK9YpYOjCfLHmo4'
  })(MapContainer);