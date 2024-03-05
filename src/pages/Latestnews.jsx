import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/latestnews.scss";
import AnimatedButton from "../resuable-comp/btn/Dtn";

import aut from "../assets/bg1.jpg";
import sut from "../assets/bg2.jpg";
import dut from "../assets/bg6.jpg";
import fut from "../assets/bg4.jpg";
import gut from "../assets/bg2.jpg";
import hut from "../assets/bg6.jpg";

function Latestnews() {
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
    <div className="news-slider-container animate-on-scroll">
      <div id="news-maincunt">
        <div id="news-textdiv">
          <div id="news-tt" className="animate-on-scroll-l">
            <p>
              <div id="news-icon"></div>
              ADVANTAGES
            </p>
            <h1 id="news-light">LATEST AND</h1>
            <h1 id="news-BOLD">GREATEST POST</h1>
          </div>
          <div id="news-btndiv" className="animate-on-scroll-r">
            <AnimatedButton
              style={{
                backgroundColor: "rgb(250,250,250)",
                color: 'isHovered ? "grey" : "black"',
                border: "none",
                width: "28vh",
                paddingRight: "2vh",
              }}
            >
              View All News
            </AnimatedButton>
          </div>
        </div>
        <Slider {...settings}>
          <div className="news-box">
            <img src={aut} alt="" />
            <p>Marc 15,2022 .. Editorial</p>
            <div className="newstextdiv">
              <h2>Quick tip for an effective styled wedding</h2>
              <h6>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                harum veniam a doloribus
              </h6>
            </div>
          </div>
          <div className="news-box">
            <img src={sut} alt="" />
            <p>Marc 15,2022 .. Editorial</p>
            <div className="newstextdiv">
              <h2>Quick tip for an effective styled wedding</h2>
              <h6>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                harum veniam a doloribus
              </h6>
            </div>
          </div>
          <div className="news-box">
            <img src={fut} alt="" />
            <p>Marc 15,2022 .. Editorial</p>
            <div className="newstextdiv">
              <h2>Quick tip for an effective styled wedding</h2>
              <h6>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                harum veniam a doloribus
              </h6>
            </div>
          </div>
          <div className="news-box">
            <img src={hut} alt="" />
            <p>Marc 15,2022 .. Editorial</p>
            <div className="newstextdiv">
              <h2>Quick tip for an effective styled wedding</h2>
              <h6>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                harum veniam a doloribus
              </h6>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Latestnews;
