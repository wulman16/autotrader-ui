import React from "react";
import formatPrice from "../lib/formatPrice";

const Card = (props) => {
  return (
    <div className="grid__item">
      <div className="card shadow">
        <img className="card-img-top" src={props.image} alt={props.altText} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title font-weight-normal">{props.heading}</h5>
          <p className="card-text">{props.subheading}</p>
          <p className="price card-text text-right mt-auto font-weight-bold">
            <hr />
            {formatPrice(props.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
