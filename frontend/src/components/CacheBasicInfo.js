import React, { Component } from 'react';
import DifficultyRating from './DifficultyRating'
import StarRating from './StarRating'

export default class CacheBasicInfo extends Component {
    render() {
        return(
            <div className="cache basic info">
                <div className="cache name">Cache Name</div>
                <div className="cache size">Cache Size</div>
                <DifficultyRating />
                <StarRating />
                <div className="cache creator">Created by Creator</div>
            </div>
        )
    }
}