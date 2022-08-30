import React from "react";

export default function Navbar2() {
  return (
    <div className="Navbar2div">
      <div className="Navbar2">
        <div></div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">Home Pages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
        </div>

        <div className="social-media-links">
          <img src={require("./images/1.png")}></img>
          <img src={require("./images/2.png")} alt="T" srcset=""></img>
          <img src={require("./images/3.png")} alt="İn" srcset=""></img>
          <img src={require("./images/4.png")} alt="Y" srcset=""></img>
        </div>
      </div>
    </div>
  );
}
