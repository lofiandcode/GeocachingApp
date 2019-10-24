import React, { Component } from 'react';
import CacheInfoContainer from './CacheInfoContainer';
import CacheReviewsContainer from './CacheReviewsContainer';
import CacheNewForm from '../components/CacheNewForm';


export default class CacheProfCont extends Component {
    componentDidMount() {
        this.props.handleCurrentCacheUpdate(this.props.match.params.id)
    }

    render() {
        // console.log(this.props.cache)
        return(
            <div>
                <CacheInfoContainer cache={this.props.cache}/>
                <CacheReviewsContainer cache={this.props.cache}/>
            </div>
        )
    }
}

