import React, { Component } from 'react';
import Size from './Size'
import DifficultyRating from './DifficultyRating'
import StarRating from './StarRating'

export default class CacheBasicInfo extends Component {
    render() {
        return(
            <div className="cache basic info">
                <div className="cache name">{this.props.name}</div>
                <Size size={this.props.size}/>
                <DifficultyRating diff={this.props.diff}/> DIFFICULT IS HARD CODED
                <StarRating star={this.props.star}/>
                <div className="cache creator">Created by {this.props.creator}</div>
            </div>
        )
    }
}