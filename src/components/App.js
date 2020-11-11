import React from "react";
import gateImage from "../data/golden-gate.jpg";
import placeholderImage from "../data/placeholder.jpg";
const data = require("../data/data.json");

console.log(data);

const App = () => {
  return (
    <div>
      App!
      <img src={gateImage} alt="Golden Gate Bridge" />
      <img src={placeholderImage} alt="Placeholder" />
    </div>
  );
};

export default App;
