import React from "react";
import Card from "./Card";

const CardList = (props) => {
  const cards = props.cards.map((card, idx) => {
    return (
      <Card
        heading={card.Heading}
        subheading={card.Subheading}
        price={card.Price}
        hasImage={card.showBridge}
        key={idx}
      />
    );
  });

  return <div className="container">{cards}</div>;
};

export default CardList;
