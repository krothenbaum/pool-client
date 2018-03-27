import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageSrc} alt={this.props.cardName} />
      </div>
    );
  }
}

export default Card;
