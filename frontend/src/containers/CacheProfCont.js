import React, { Component } from 'react';
import CacheInfoContainer from './CacheInfoContainer'
import CacheReviewsContainer from './CacheReviewsContainer'


export default class CacheProfCont extends Component {

    render() {
        return(
            <div>
                <CacheInfoContainer caches={this.props}/>
                <CacheReviewsContainer />
            </div>
        )
    }
}

