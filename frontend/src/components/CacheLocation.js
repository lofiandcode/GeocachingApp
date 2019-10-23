import React, { Component } from 'react';

export default class CacheLocation extends Component {
    formatCoords = () => {
        if (this.props.coordinates) {
            return `${this.props.coordinates.lat}, ${this.props.coordinates.lng}`
        }
    }

    render() {
        return(
            <div className="location card">
                <h2>Location</h2>
                <h3>Coordinates: {this.formatCoords()}</h3>
                MAKE A REAL MAP LATER!
                {/* Below will be replaced by an actual map later. */}
                <img src="https://recreation.southwindsor.org/ImageRepository/Document?documentID=115" alt="map"></img>
            </div>
        )
    }
}