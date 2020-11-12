import React, { useState } from "react";

const SortForm = ({ handleSubmit }) => {
  const [category, setCategory] = useState("Heading");
  const [order, setOrder] = useState("asc");

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(category, order);
  };

  return (
    <div className="row">
      <form className="form-inline mb-3 mx-auto" onSubmit={onFormSubmit}>
        <label className="col-form-label mr-2 mb-1 mb-sm-0">
          Sort Results By:
        </label>
        <select
          className="form-control mr-2 mb-2 mb-sm-0"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Heading">Heading</option>
          <option value="Subheading">Subheading</option>
          <option value="Price">Price</option>
        </select>
        <select
          className="form-control mr-2 mb-2 mb-sm-0"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button type="submit" className="btn btn-primary mb-2 mb-sm-0">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SortForm;
