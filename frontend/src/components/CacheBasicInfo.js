import React, { Component } from 'react';

export default class CacheBasicInfo extends Component {
    render() {
        return(
            <div className="cache basic info">
                <div className="cache name">Cache Name</div>
                <div className="cache size">Cache Size</div>
                <div className="cache difficulty">Cache Difficulty</div>
                <div className="cache quality">Cache Quality</div>
                <div className="cache creator">Created by Creator</div>
            </div>
        )
    }
}