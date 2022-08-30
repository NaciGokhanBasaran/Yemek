import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <br />
      <br />
      <div className="image">
        <img src={require("./images//logos/1.png")} alt="logo"></img>
      </div>
      <br />
      <br />
      <div className="footer-bottom">
        <div className="footer-about">
          <h2>About Us</h2>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            sollicitudin mi accumsan venenatis maximus. Curabitur.
          </p>
          <br />
        </div>
        <div className="footer-link">
          <h2>Quick Links</h2>
          <br></br>
          <ul>
            <li>
              <a>Latest News</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>Our Products</a>
            </li>
            <li>
              <a>Our Authors</a>
            </li>
            <li>
              <a>Recipe Details</a>
            </li>
          </ul>
        </div>

        <div className="recent-recipes">
          <h2>Recent Recipes</h2>
          <br></br>

          <div className="recipe2">
            <img src="https://images.deliveryhero.io/image/fd-tr/LH/kuwz-hero.jpg"></img>
            <div className="recipe-text">
              <h3>Burgers</h3>
              <p>Sorem ipsum dolor amet consectetur adipi</p>
            </div>
          </div>

          <div className="recipe2">
            <img src="https://images.deliveryhero.io/image/fd-tr/LH/kuwz-hero.jpg"></img>
            <div className="recipe-text">
              <h3>Burgers</h3>
              <p>Sorem ipsum dolor amet consectetur adipi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
