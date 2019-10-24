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
          </div> */}