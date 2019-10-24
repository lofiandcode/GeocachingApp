import React, { Component } from 'react';
import CacheReview from '../components/CacheReview';

export default class CacheReviewsContainer extends Component {
    
    
    divideCacheData = () => {
        // if (this.props.cache.histories) {
            
        //     return this.props.cache.histories.map(review => {
        //         let reviewer = this.props.cache.reviewer.map(rv => {
        //             if (rv[0] === review.id) {
        //                 return rv[1]
        //             }
        //         })
                
                
        //         return (
        //             <CacheReview
        //                 key={review.id}
        //                 star={review.rating}
        //                 diff={review.difficulty}
        //                 reviewer={reviewer}
        //                 comment={review.comment}
        //                 // date={review.date}
        //             />
        //         )
        //     })
        // }
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