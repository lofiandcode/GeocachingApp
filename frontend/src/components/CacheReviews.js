import React, { Component } from 'react';
import DifficultyRating from './DifficultyRating';
import StarRating from './StarRating';

export default class CacheReviews extends Component {
    render() {
        return(
            <div className="reviews">
                <h2>Reviews</h2>
                <p>I'm the Reviews. You can find me in components/CacheReviews.js</p>
                <p>I'll look way different later.</p>
                <p>I think this cache's difficulty is:</p>
                <DifficultyRating />
                <p>I also rated this cache:</p>
                <StarRating />
            </div>
        )
    }
}