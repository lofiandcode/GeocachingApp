import React, { Component } from 'react';


export default class Size extends Component {
    
    getSizeIcon = () => {
        const xsIcon="../../size-xs.png"
        const sIcon="../../size-s.png"
        const mIcon="../../size-m.png"
        const lIcon="../../size-l.png"
        const xlIcon="../../size-xl.png"
        return xlIcon
    }

    render() {
      return (
        <img src={this.getSizeIcon()} alt="difficulty" width="25"></img>
      );
    }
}