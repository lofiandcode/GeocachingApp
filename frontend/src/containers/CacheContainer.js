import React, { Component } from 'react';
import CacheInfoContainer from './CacheInfoContainer'
import CacheReviewsContainer from './CacheReviewsContainer'

export default class CacheContainer extends Component {
    render() {
        return(
            <div>
                <CacheInfoContainer />
                <CacheReviewsContainer />
            </div>
        )
    }
}