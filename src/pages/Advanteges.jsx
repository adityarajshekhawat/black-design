import React from "react";
import AnimatedButton from "../resuable-comp/btn/Dtn";
import bulb from "../assets/light-bulb.png";
import stack from "../assets/layers.png";
import drone from "../assets/drone.png";

import "../styles/adv.scss";

const Adv = () => {
  return (
    <>
      <div className="adv-main animate-on-scroll">
        <div id="adv-textdiv">
          <div id="adv-tt" className="animate-on-scroll-l">
            <p>
              <div id="adv-icon"></div>
              ADVANTAGES
            </p>
            <h1 id="adv-light">
              LETS CHECK <h1 id="adv-bold"> OUR</h1>
            </h1>
            <h1 id="adv-sf">SERVICES</h1>
          </div>
          <div className="animate-on-scroll-r">
            <AnimatedButton
              style={{
                backgroundColor: 'isHovered ? "grey" : "black"',
                color: 'isHovered ? "grey" : "black"',
                border: "none",
                width: "35vh",
                paddingRight: "2vh",
              }}
            >
              View All Our Services
            </AnimatedButton>
          </div>
        </div>
        <div id="adv-imgdiv">
          <div className="adv-box animate-on-scroll-l" id="adv-b1">
            <img src={bulb} alt="" />
            <h2>Digital Product</h2> <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              eligendi.
            </p>
            <AnimatedButton
              style={{
                backgroundColor: "grey",
                color: 'isHovered ? "grey" : "black"',
                border: "none",
                paddingRight: "2vh",
              }}
            >
              About Us
            </AnimatedButton>
          </div>
          <div className="adv-box animate-on-scroll-l" id="adv-b2">
            <img src={stack} alt="" />
            <h2>Web Development</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              eligendi.
            </p>
            <AnimatedButton
              style={{
                backgroundColor: "grey",
                color: 'isHovered ? "grey" : "black"',
                border: "none",
                paddingRight: "2vh",
              }}
            >
              About Us
            </AnimatedButton>
          </div>
          <div className="adv-box animate-on-scroll-l" id="adv-b3">
            <img src={drone} alt="" />
            <h2>UI / UX</h2> <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              eligendi.
            </p>
            <AnimatedButton
              style={{
                backgroundColor: "gray",
                color: 'isHovered ? "grey" : "black"',
                border: "none",
                paddingRight: "2vh",
              }}
            >
              About Us
            </AnimatedButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adv;
