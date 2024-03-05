import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testi.scss";
import AnimatedButton from "../resuable-comp/btn/Dtn";

import aut from "../assets/bg1.jpg";
import sut from "../assets/bg2.jpg";
import dut from "../assets/bg6.jpg";
import fut from "../assets/bg4.jpg";
import gut from "../assets/bg2.jpg";
import hut from "../assets/bg6.jpg";

function Testimonials() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",

          background: "grey",
          marginTop: "35vh",
          marginright: "150vh",
          borderRadius: "2vh",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          background: "grey",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-containerr animate-on-scroll">
      <div id="textdivv">
        <div id="tt" className="animate-on-scroll-l">
          <p>
            <div id="icon"></div>
            ADVANTAGES
          </p>
          <h1 id="light" style={{ display: "flex" }}>
            WHAT PEOPLE
            <h1 id="BOLD" style={{ display: "flex", marginLeft: "2vh" }}>
              {" "}
              ARE
            </h1>
          </h1>
          <h1 id="BOLD">SAYING</h1>
        </div>
        <div id="btndiv" className="animate-on-scroll-r">
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
      <div id="maincunt">
        <Slider {...settings}>
          <div className="resize-box">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              esse vero dolores voluptatibus doloribus laudantium doloremque
              reprehenderit minima? Quos, ut?
            </p>
            <hr />
            <div className="id">
              <img src={aut} alt="" />
              <div className="idtext">
                <h3>LUIs Andres</h3>
                <h5>Grapic design</h5>
              </div>
            </div>
          </div>
          <div className="resize-box">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              esse vero dolores voluptatibus doloribus laudantium doloremque
              reprehenderit minima? Quos, ut?
            </p>
            <hr />
            <div className="id">
              <img src={sut} alt="" />
              <div className="idtext">
                <h3>LUIs Andres</h3>
                <h5>Grapic design</h5>
              </div>
            </div>
          </div>
          <div className="resize-box">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              esse vero dolores voluptatibus doloribus laudantium doloremque
              reprehenderit minima? Quos, ut?
            </p>
            <hr />
            <div className="id">
              <img src={dut} alt="" />
              <div className="idtext">
                <h3>LUIs Andres</h3>
                <h5>Grapic design</h5>
              </div>
            </div>
          </div>
          <div className="resize-box">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              esse vero dolores voluptatibus doloribus laudantium doloremque
              reprehenderit minima? Quos, ut?
            </p>
            <hr />
            <div className="id">
              <img src={fut} alt="" />
              <div className="idtext">
                <h3>LUIs Andres</h3>
                <h5>Grapic design</h5>
              </div>
            </div>
          </div>
          <div className="resize-box">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              esse vero dolores voluptatibus doloribus laudantium doloremque
              reprehenderit minima? Quos, ut?
            </p>
            <hr />
            <div className="id">
              <img src={gut} alt="" />
              <div className="idtext">
                <h3>LUIs Andres</h3>
                <h5>Grapic design</h5>
              </div>
            </div>
          </div>
          <div className="resize-box">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              esse vero dolores voluptatibus doloribus laudantium doloremque
              reprehenderit minima? Quos, ut?
            </p>
            <hr />
            <div className="id">
              <img src={hut} alt="" />
              <div className="idtext">
                <h3>LUIs Andres</h3>
                <h5>Grapic design</h5>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
