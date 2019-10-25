import React, { Component } from 'react';
import Map from '../components/Map';
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import MapStyles from '../MapStyles';


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

      // displayMarkers = () => {
      //   return this.state.caches.map((cache, index) => {
      //     return <Marker key={index} id={index} position={{
      //               lat: cache.lat,
      //               lng: cache.lng
      //    }}
      //    onClick={() => console.log("yoo cached me!")} />
      //   })
      // }

    render() {
        return (
          <div style={{ margin: '10px' }}>
            <Map
              google={this.props.google}
              center={{lat: 47.6093, lng: -122.3384988}}
              height='300px'
              zoom={15}
              caches={this.props.caches}
            />
          </div>
        );
      }
}
export default MapContainer

// GoogleApiWrapper({
//     apiKey: 'AIzaSyCAfBTkrlt57CanfbaWZK9YpYOjCfLHmo4'
//   })(MapContainer);