import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';

export default class StarRating extends Component {
    // changeRating( newRating ) {
    //   this.setState({
    //     rating: newRating
    //   });
    // }

    render() {
      return (
          <Ratings
            rating={this.props.star}
            // rating={3.579}
            // rating={this.state.rating}
            // widgetRatedColors="blue"
            // changeRating={this.changeRating}
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
      );
    }
}