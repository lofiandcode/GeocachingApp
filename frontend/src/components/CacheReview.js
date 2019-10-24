import React, { Component } from 'react';
import DifficultyRating from './DifficultyRating';
import StarRating from './StarRating';

export default class CacheReview extends Component {
    render() {
        return(
            <div className="reviews">
                <div className="rating">{this.props.star}</div>
                <StarRating star={this.props.star}/>
                <DifficultyRating diff={this.props.diff}/>
                <div className="review data">by {this.props.reviewer}</div>
                {/* <div className="review data">Oct 29, 2019</div> */}
                <p>{this.props.comment}</p>
            </div>
        )
    }
}