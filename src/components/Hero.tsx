import React from "react";
import Navbar from "./Navbar";
import "../app/styles/hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <Navbar />
      <div className="hero-content">
        <div></div>

        <div className="hero-text">
          <div className="hero-msin">
            <p data-aos="zoom-in-up">I, am</p>
            <p data-aos="zoom-in-up">Shakir</p>
            <p data-aos="zoom-in-up">Hussain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
