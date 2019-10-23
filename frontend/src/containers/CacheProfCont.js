import React, { Component } from 'react';
import CacheInfoContainer from './CacheInfoContainer'
import CacheReviewsContainer from './CacheReviewsContainer'


export default class CacheProfCont extends Component {
    componentDidMount() {
        this.props.handleCurrentCacheUpdate(this.props.match.params.id)
    }

    // componentWillReceiveProps(props) {
    //     console.log(props)
    // }


    render() {
        return(
            <div>
                <CacheInfoContainer caches={this.props}/>
                <CacheReviewsContainer />
            </div>
        )
    }
}

