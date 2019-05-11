import React from "react";
import "./Cards.css";

const Card = props => (
  <div className="card img-container">
    <img alt={props.name} src={props.image} onClick={() => props.cardClick(props.id)} />
  </div>
);

export default Card;
