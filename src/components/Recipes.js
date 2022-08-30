import React from "react";
import Card from "./Card";
import foods from "./data";
import { useState } from "react";
export default function Recipes() {
  const [number1, changeNumber1] = useState(0);
  const [number2, changeNumber2] = useState(1);
  const [number3, changeNumber3] = useState(2);

  function addProps() {
    console.log(number1);

    if (number1 == foods.length - 1) {
      changeNumber1(0);
      changeNumber2(number2 + 1);
      changeNumber3(number3 + 1);
    } else if (number2 == foods.length - 1) {
      changeNumber2(0);
      changeNumber1(number1 + 1);
      changeNumber3(number3 + 1);
    } else if (number3 == foods.length - 1) {
      changeNumber3(0);
      changeNumber1(number1 + 1);
      changeNumber2(number2 + 1);
    } else {
      changeNumber1(number1 + 1);
      changeNumber2(number2 + 1);
      changeNumber3(number3 + 1);
    }
  }
  function remProps() {
    console.log(number1);

    if (number1 == 0) {
      changeNumber1(4);
      changeNumber2(number2 - 1);
      changeNumber3(number3 - 1);
    } else if (number2 == 0) {
      changeNumber2(4);
      changeNumber1(number1 - 1);
      changeNumber3(number3 - 1);
    } else if (number3 == 0) {
      changeNumber3(4);
      changeNumber1(number1 - 1);
      changeNumber2(number2 - 1);
    } else {
      changeNumber1(number1 - 1);
      changeNumber2(number2 - 1);
      changeNumber3(number3 - 1);
    }
  }

  return (
    <div className="Recipes">
      <h1>Recipes</h1>
      <br />
      <br />

      <div className="Cards">
        <p></p>
        <button className="card-num-button" onClick={remProps}>
          {"<"}
        </button>
        <div className="card1">
          <Card
            image={foods[number1]["image"]}
            title={foods[number1]["title"]}
            minute={foods[number1]["minute"]}
            diffuculity={foods[number1]["diffuculity"]}
            recipe={foods[number1]["recipe"]}
          />
        </div>
        <div className="card2">
          <Card
            image={foods[number2]["image"]}
            title={foods[number2]["title"]}
            minute={foods[number2]["minute"]}
            diffuculity={foods[number2]["diffuculity"]}
            recipe={foods[number2]["recipe"]}
          />
        </div>
        <div className="card3">
          <Card
            image={foods[number3]["image"]}
            title={foods[number3]["title"]}
            minute={foods[number3]["minute"]}
            diffuculity={foods[number3]["diffuculity"]}
            recipe={foods[number3]["recipe"]}
          />
        </div>
        <button className="card-num-button" onClick={addProps}>
          {">"}
        </button>
      </div>
    </div>
  );
}
/*
 */
