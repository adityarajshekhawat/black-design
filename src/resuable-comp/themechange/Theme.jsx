import React from "react";
import "./theme.scss";
import linkdin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
const Theme = () => {
  return (
    <>
      <div id="theme-main">
        <button id="theme-btn"></button>
        <div id="theme-follow">
          <img src={linkdin} alt="" className="theme-followicons" />
          <img src={facebook} alt="" className="theme-followicons" />
          <img src={insta} alt="" className="theme-followicons" />
          <img src={twitter} alt="" className="theme-followicons" />
          <br id="theme-br" />
          <p id="theme-followtext">FOLLOW US</p>
        </div>
      </div>
    </>
  );
};

export default Theme;
