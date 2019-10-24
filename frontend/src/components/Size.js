import React, { Component } from 'react';


export default class Size extends Component {
    
    getSizeIcon = () => {
      const xsIcon="../../size-xs.png"
      const sIcon="../../size-s.png"
      const mIcon="../../size-m.png"
      const lIcon="../../size-l.png"
      const xlIcon="../../size-xl.png"

      switch (this.props.size) {
        case "extra small":
          return xsIcon;
        case "small":
          return sIcon;
        case "medium":
          return mIcon;
        case "large":
          return lIcon;
        case "extra large":
          return xlIcon;
        default:
          // console.log()
      }
    }

    render() {
      return (
        <img src={this.getSizeIcon()} alt="size" width="25"></img>
      );
    }
}