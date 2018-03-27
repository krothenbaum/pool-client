import React, { Component } from "react";
import Card from "../card";

class SealedPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.getBoosters()
      .then(res => {
        res.forEach(element => {
          console.log(element);
          this.setState({
            cards: [...this.state.cards, element]
          });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  getBoosters = async () => {
    const response = await fetch("/booster/rix");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    const cards = this.state.cards;
    return (
      <div>
        {cards.map(card => (
          <div key={card._id} className={"card"}>
            <Card cardName={card.name} imageSrc={card.image_uris.small} />
          </div>
        ))}
      </div>
    );
  }
}

export default SealedPool;
