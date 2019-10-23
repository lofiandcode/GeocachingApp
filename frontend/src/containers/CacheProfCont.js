import React, { Component } from 'react';
import CacheInfoContainer from './CacheInfoContainer'
import CacheReviewsContainer from './CacheReviewsContainer'


export default class CacheProfCont extends Component {
    componentDidMount() {
        this.props.handleCurrentCacheUpdate(this.props.match.params.id)
    }

    render() {
        // console.log(this.props.cache)
        return(
            <div>
                <h2>{this.props.cache.name}</h2>
                <CacheInfoContainer cache={this.props.cache}/>
                <CacheReviewsContainer />
            </div>
        )
    }
}

