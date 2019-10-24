import React, { Component } from 'react';
import CacheReview from '../components/CacheReview';

export default class CacheReviewsContainer extends Component {
    divideCacheData = () => {
        
        // map over this.props.reviews and return <CacheReview /> component; change the cache.whatever to review.whatever
        const reviews = this.props.reviews
        console.log("CACHE REVIEWS CONTAINER", reviews)
        // return (
        //     <CacheReview
        //         star={cache.star}
        //         diff={cache.diff}
        //         user={cache.user}
        //         comment={cache.comment}
        //         // date={cache.date}
        //     />
        // )
    }
    
    render() {
        return(
            <div>
                <h1>Reviews</h1>
                {this.divideCacheData()}
            </div>
        )
    }
}