import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import FindLocation from '../components/FindLocation';
// import MapStyles from '../MapStyles';
import CurrentLocation from '../components/CurrentLocation';

const mapStyles = {
    width: '100%',
    height: '100%',
    // styles: MapStyles
  };  

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showingInfoWindow: false,  //Hides or the shows the infoWindow
          activeMarker: {},          //Shows the active marker upon click
          selectedPlace: {},       //Shows the infoWindow to the selected place upon a marker
  
          caches: [
            // {latitude: 47.6077, longitude: -122.3355},
            {latitude: 37.7953, longitude: -122.4067},
            {latitude: -33.867886, longitude: -63.987},
            {latitude: 51.848637, longitude: -0.55462}
                ]
        }
      };

      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });

      onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
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
            <CurrentLocation
              centerAroundCurrentLocation
              google={this.props.google}
            >
            {/* <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
              // style={{styles: MapStyles}}
            > */}
              {this.displayMarkers()}
              <Marker 
                onClick={this.onMarkerClick}
                name={"I see you!"} 
                // position={{ lat: 48.00, lng: -122.00}} 
                />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}>
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
              </InfoWindow>
            {/* </Map> */}
            </CurrentLocation>
          </div>
        );
      }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCAfBTkrlt57CanfbaWZK9YpYOjCfLHmo4'
  })(MapContainer);