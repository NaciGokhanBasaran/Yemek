import React from "react";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
export default function Navbar1() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="navbar1">
        <div className="navbar1-links">
          <a href="#">
            <p>Team</p>{" "}
          </a>
          <a href="#">
            <p>Contact Us</p>{" "}
          </a>
        </div>
        <div className="navbar1-logo">
          <img src={require("./images//logos/2.png")} alt="logo"></img>
        </div>
        <div className="Submit-button">
          <button href="#"> Submit Recipe</button>
        </div>

        <div className="lines" onClick={() => setOpen(!open)}>
          <div className="line "></div>
          <div className="line "></div>
          <div className="line "></div>
        </div>
      </div>
      {open && <HamburgerMenu />}
      {open && console.log("succes")}
    </div>
  );
}
/**/
