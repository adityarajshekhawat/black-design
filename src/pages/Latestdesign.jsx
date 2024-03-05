import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/latestdesign.scss";
import AnimatedButton from "../resuable-comp/btn/Dtn";

import aut from "../assets/bg1.jpg";
import sut from "../assets/bg2.jpg";
import dut from "../assets/bg6.jpg";
import fut from "../assets/bg4.jpg";
import gut from "../assets/bg2.jpg";
import hut from "../assets/bg6.jpg";

function Latestdesign() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          // display: "block",
          // color: "black",
          // background: "grey",
          // marginTop: "39vh",
          // marginRight: "16vh",
          // borderRadius: "2vh",
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
          marginTop: "39vh",
          marginLeft: "6vh",
          borderRadius: "2vh",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="resize-slider-container animate-on-scroll">
      <div id="resizemaincunt">
        <div id="resizetextdiv">
          <div id="resizett" className="animate-on-scroll-l">
            <p>
              <div id="resizeicon"></div>
              ADVANTAGES
            </p>
            <h1 id="resizelight">OUR LATEST</h1>
            <h1 id="resizeBOLD">AWESOME DESIGNS</h1>
          </div>
          <div id="resizebtndiv" className="animate-on-scroll-r">
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
        <Slider {...settings}>
          <div className="resize-box">
            <img src={aut} alt="" />
            <h5>proDuction</h5>
            <h2>helosity head</h2>
            <AnimatedButton>View Case</AnimatedButton>
          </div>
          <div className="resize-box">
            <img src={sut} alt="" />
            <h5>proDuction</h5>
            <h2>helosity head</h2>
            <AnimatedButton>View Case</AnimatedButton>
          </div>
          <div className="resize-box">
            <img src={dut} alt="" />
            <h5>proDuction</h5>
            <h2>helosity head</h2>
            <AnimatedButton>View Case</AnimatedButton>
          </div>
          <div className="resize-box">
            <img src={fut} alt="" />
            <h5>proDuction</h5>
            <h2>helosity head</h2>
            <AnimatedButton>View Case</AnimatedButton>
          </div>
          <div className="resize-box">
            <img src={gut} alt="" />
            <h5>proDuction</h5>
            <h2>helosity head</h2>
            <AnimatedButton>View Case</AnimatedButton>
          </div>
          <div className="resize-box">
            <img src={hut} alt="" />
            <h5>proDuction</h5>
            <h2>helosity head</h2>
            <AnimatedButton>View Case</AnimatedButton>
          </div>
          {/* <NextArrow />
          <PrevArrow /> */}
        </Slider>
      </div>
    </div>
  );
}

export default Latestdesign;
