import React, { useState } from "react";
import CardList from "./CardList";
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
