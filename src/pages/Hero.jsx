import React from "react";
import "../styles/hero.scss";
import about1 from "../assets/about-1.jpg";
import AnimatedButton from "../resuable-comp/btn/Dtn";

const Hero = () => {
  return (
    <>
      <div id="hero-main" className="animate-on-scroll">
        <div className="hero-bg"></div>
        <h1 id="hero-light" className="animate-on-scroll-l">
          WE ARE
        </h1>
        <h1 id="hero-black1" className="animate-on-scroll-r">
          BLACK DSN
        </h1>
        <h1 id="hero-black2" className="animate-on-scroll-l">
          AGENCY
        </h1>
        <img src={about1} alt="" id="hero-ab1" />
        <div className="hero-texbtn animate-on-scroll-l">
          <AnimatedButton
            style={{
              backgroundColor: 'isHovered ? "grey" : "black"',
              color: 'isHovered ? "grey" : "black"',
              border: "none",
              paddingRight: "2vh",
            }}
          >
            About Us
          </AnimatedButton>
          <p className="animate-on-scroll-r">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            aspernatur perferendis ex numquam
          </p>
        </div>
        <div id="hero-ab2"></div>
      </div>
    </>
  );
};

export default Hero;
