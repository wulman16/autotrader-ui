import React, { useState } from "react";
import CardList from "./CardList";
import gateImage from "../data/golden-gate.jpg";
import placeholderImage from "../data/placeholder.jpg";
const cardData = require("../data/data.json");

const App = () => {
  const [data, setData] = useState(cardData);

  return (
    <div className="container">
      <CardList cards={data} />
    </div>
  );
};

export default App;
