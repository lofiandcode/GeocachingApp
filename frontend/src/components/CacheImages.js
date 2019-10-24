import React, { Component } from 'react';

export default class CacheImages extends Component {
    render() {
        return(
            <div className="cache image">
                <h2>Images</h2>
                <img src={this.props.image} height="150px" alt="this is a cache"></img>
            </div>
        )
    }
}