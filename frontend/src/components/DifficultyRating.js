import React, { Component } from 'react';

export default class DifficultyRating extends Component {

  getDifficulty = () => {
    if (this.props.diff < 34) {
      return "../../easy.png"
    } else if (this.props.diff >= 34 && this.props.diff < 67) {
      return "../../intermediate.png"
    } else {
      return "../../hard.png"
    }
    
    
  }

  render() {
    return (
        <img src={this.getDifficulty()} alt="difficulty" width="50"></img>
    );
  }
}