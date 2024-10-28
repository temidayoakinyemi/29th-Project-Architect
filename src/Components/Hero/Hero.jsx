import React from "react";
import "../Hero/Hero.css";
import House from "../../assets/house.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-all">
          <h1 className="hero-h1">
            Realize your dreams <br /> about building and <br /> construction
          </h1>
          <p className="hero-p">
            We turn your dream to reality and we’ll never stop <br /> until
            you're satisfied with the result
          </p>
          <button className="hero-btn">CONTACT US</button>
      </div>
      <img src={House} alt="" className="house" />
    </div>
  );
};

export default Hero;
