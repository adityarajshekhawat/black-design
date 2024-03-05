import React from "react";
import AnimatedButton from "../resuable-comp/btn/Dtn";
import "../styles/footer.scss";

import logo from "../assets/logo.png";
import linkdin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer id="footer-main" className="animate-on-scroll">
      <div id="footer-textdiv" className="animate-on-scroll-l">
        <h1 id="light">LET'S BUILD SOMETHING</h1>
        <h1 id="light" style={{ display: "flex" }}>
          <em>
            <b> AMAZING</b>
          </em>
          <h1 id="light" style={{ display: "flex", marginLeft: "2vh" }}>
            TOGETHER
          </h1>
        </h1>
        <AnimatedButton
          style={{
            backgroundColor: "transparent",
            color: "grey",
            border: "1px solid gray",
            width: "35vh",
            paddingRight: "2vh",
          }}
        >
          START A PROJECT
        </AnimatedButton>
      </div>
      <div id="footer-mid-div" className="animate-on-scroll-r">
        <div id="footer-t1">
          <img src={logo} alt="" id="footer-logo" />
          <div id="footer-t1-icons">
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={linkdin} alt="" />
            </a>
            <a href="#">
              <img src={insta} alt="" />
            </a>
          </div>
        </div>
        <div id="footer-t2">
          <h2 className="footer-th1">NAVIGATION</h2>
          <a href="#" className="footer-t2-a">
            HOME
          </a>
          <a href="#" className="footer-t2-a">
            PORTFOLIO
          </a>
          <a href="#" className="footer-t2-a">
            NEWS
          </a>
          <a href="#" className="footer-t2-a">
            ABOUT
          </a>
          <a href="#" className="footer-t2-a">
            CONTACT
          </a>
        </div>
        <div id="footer-t3">
          <h2 className="footer-th1">CONTACT</h2>
          <p>
            <b>T:</b>+001 225 3351
          </p>
          <p>
            <b>F:</b>+001 225 3351
          </p>
          <p>
            <b>E:</b>info@dnsgrid.com
          </p>
        </div>
        <div id="footer-t4">
          <h2 className="footer-th1">ADDRESS</h2>
          <p>
            El-Mahalla El-Kubra 37 <br />
            1776 Damietta <br />
            Egypt
          </p>
        </div>
      </div>
      <div id="footer-lastdiv" className="animate-on-scroll-l">
        <hr />© 2022 Digital Agency Designed by DSN Grid
      </div>
    </footer>
  );
};

export default Footer;
