import React from "react";
import Card from "./Card";
import gateImage from "../data/golden-gate.jpg";
import placeholderImage from "../data/placeholder.jpg";

const CardList = (props) => {
  const cards = props.cards.map((card, idx) => {
    const image = card.showBridge ? gateImage : placeholderImage;
    const altText = card.showBridge ? "Golden Gate Bridge" : "";

    return (
      <Card
        heading={card.Heading}
        subheading={card.Subheading}
        price={card.Price}
        image={image}
        altText={altText}
        key={idx}
      />
    );
  });

  return <div className="grid">{cards}</div>;
};

export default CardList;
