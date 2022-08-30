import React from "react";

export default function Card(props) {
  return (
    <div className="Carddiv">
      <div className="Card">
        <img src={props.image}></img>
        <h2>{props.title}</h2>
        <div className="card-bottom">
          <p>🕗{props.minute} minutes</p>
          <p>🔪{props.diffuculity}</p>
        </div>
        <br />
        <p className="recipe">{props.recipe}</p>

        <button>Read More</button>
      </div>
      <br />
      <br />
    </div>
  );
}
