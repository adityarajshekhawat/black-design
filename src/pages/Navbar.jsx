import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import "../styles/animation.scss";
import "../styles/navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <>
      <nav id="nav-navbar">
        <div className="nav-logo">
          <img src={logo} alt="" id="nav-logo" />
        </div>
        <div className="nav-menu">
          <button id="nav-menubtn" onClick={toggleMenu}>
            {isMenuOpen ? <IoCloseOutline /> : <CiMenuFries />}
          </button>
          <p id="nav-mname">{isMenuOpen ? "Close" : "Menu"}</p>
        </div>
      </nav>
      <div id="nav-menudiv" className={isMenuOpen ? "nav-show" : "nav-back"}>
        <div id="nav-navitems">
          <a href="#">
            <p>01.</p>
            <h1>Home</h1>
          </a>
          <a href="#">
            <p>02.</p>
            <h1>Portfolio</h1>
          </a>
          <a href="#">
            <p>03.</p>
            <h1>Works</h1>
          </a>
          <a href="#">
            <p>04.</p>
            <h1>Blog</h1>
          </a>
          <a href="#">
            <p>05.</p>
            <h1>Service</h1>
          </a>
          <a href="#">
            <p>06.</p>
            <h1>About</h1>
          </a>
          <a href="#">
            <p>07.</p>
            <h1>Contact</h1>
          </a>
        </div>
        <hr />
        <div id="nav-contactinfo">
          <div id="nav-adiv">
            <h1>studio</h1>
            <p>Lorem ipsum dolor sit. Lorem ipsum dolor sit.</p>
          </div>
          <div id="nav-cdiv">
            <h1>Contact</h1>
            <a href="#">+91978564123</a>
            <a href="#">+91 9878965423</a>
            <a href="# ">INFO@NUFSASS.COM</a>
          </div>
          <div id="nav-fdiv">
            <h1>Follow Us</h1>
            <a href="#" className="nav-followlinks">
              Dribble.
            </a>
            <a href="#" className="nav-followlinks">
              Behance.
            </a>
            <a href="#" className="nav-followlinks">
              Linkdin.
            </a>
            <a href="#" className="nav-followlinks">
              Twitter.
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
