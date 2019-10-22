import React, { Component } from 'react';

export default class CacheLocation extends Component {
    render() {
        return(
            <div className="location card">
                <h2>Location</h2>
                <h3>Coordinates: 51.1783253, -1.8272539</h3>
                {/* Below will be replaced by an actual map later. */}
                <img src="https://recreation.southwindsor.org/ImageRepository/Document?documentID=115" alt="map"></img>
            </div>
        )
    }
}