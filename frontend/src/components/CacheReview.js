import React, { Component } from 'react';
import DifficultyRating from './DifficultyRating';
import StarRating from './StarRating';

export default class CacheReview extends Component {
    render() {
        console.log(this.props)
        return(
            <div className="reviews">
                <div className="rating">4.0</div>
                <StarRating />
                <DifficultyRating />
                <div className="review data">by LinkedUsername</div>
                <div className="review data">Oct 29, 2019</div>
                <p>I'm a review. I'm very helpful. I'll tell you all about what I thought this cache was like. I'm going to write a lot just so that I have some text to work with here. You don't have to write a lot, and I'll need an example that looks like that as well, but not yet. I think it's easier to check formatting with a lot of text, so that's why I'm typing so much.</p>
            </div>
        )
    }
}