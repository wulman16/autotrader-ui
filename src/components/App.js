import React, { useState } from "react";
import SortForm from "./SortForm";
import CardList from "./CardList";
import handleSort from "../lib/handleSort";
const cardData = require("../data/data.json");

const App = () => {
  const [data, setData] = useState(cardData);

  const handleSubmit = (category, order) => {
    const newData = handleSort([...data], category, order);
    setData(newData);
  };

  return (
    <div className="container">
      <SortForm handleSubmit={handleSubmit} />
      <CardList cards={data} />
    </div>
  );
};

export default App;
