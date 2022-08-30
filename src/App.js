import { useState } from "react";
import "./style.css";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import Video from "./components/Video";
function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Navbar2 />
      <Hero />
      <Recipes />
      <OurTeam />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
