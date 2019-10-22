import React, { Component } from 'react';
import CacheReviews from '../components/CacheReviews';

export default class CacheReviewsContainer extends Component {
    render() {
        return(
            <div>
                <h1>Reviews</h1>
                <CacheReviews />
            </div>
        )
    }
}