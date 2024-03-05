import React from "react";
import { FaCheck } from "react-icons/fa6";
import AnimatedButton from "../resuable-comp/btn/Dtn";
import "../styles/tech.scss";
const Techno = () => {
  return (
    <div id="techno-boss" className="animate-on-scroll">
      <div id="techno-imgd" className="animate-on-scroll-l"></div>
      <div id="techno-main" className="animate-on-scroll-r">
        <div id="techno-textdiv">
          <p id="techno-nut">
            <div id="techno-icon"></div>
            ADVANTAGES
          </p>
        </div>
        <h1 className="techno-light">HOW IS YOUR </h1>
        <h1 id="techno-h1s">
          <h1 className="techno-light" id="techno-h11">
            VISUAL
          </h1>
          IDENTITY?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi qui
          laudantium voluptas repudiandae possimus itaque voluptatibus pariatur
          , aut soluta! Lorem ipsum
          <br />
          <br />
          dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.
        </p>
        <div className="techno-tickdiv animate-on-scroll-r">
          <FaCheck />
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="techno-tickdiv animate-on-scroll-l">
          <FaCheck />
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="techno-tickdiv animate-on-scroll-r" id="techno-lastdiv">
          <FaCheck />
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <AnimatedButton > LEARN MORE</AnimatedButton>
      </div>
    </div>
  );
};

export default Techno;
