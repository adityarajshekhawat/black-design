import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/animation.scss";
import "../styles/home.scss";
import dot from "../assets/dot.png";
import right from "../assets/circle-right-solid.svg";
import left from "../assets/circle-left-solid.svg";
import AnimatedButton from "../resuable-comp/btn/Dtn";

import img1 from "../assets/bg1.jpg";
import img2 from "../assets/bg2.jpg";
import img3 from "../assets/1.jpg";
import img4 from "../assets/bg7.jpg";
import img5 from "../assets/bg8.jpg";
import img6 from "../assets/bg6.jpg";

const mainobj = [
  {
    id: "1",
    h5: "visit OUR",
    h1: "GLASSES",
    p: "Content of Slide",
    url: img1,
  },
  {
    id: "2",
    h5: "Slide 2",
    h1: "earphones",
    p: "Content of Slide 2",
    url: img2,
  },
  {
    id: "3",
    h5: "Slide 3",
    h1: "Headphones",
    p: "Content of Slide 3",
    url: img3,
  },
  {
    id: "4",
    h5: "Slide 4",
    h1: "Gaddi",
    p: "Content of Slide 4",
    url: img4,
  },
  {
    id: "5",
    h5: "Slide 5",
    h1: "Eatable candle",
    p: "Content of Slide 5",
    url: img5,
  },
  {
    id: "6",
    h5: "Slide 6",
    h1: "Plug",
    p: "Content of Slide 6",
    url: img6,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(mainobj[0].url);

  const handleNext = () => {
    if (currentSlide < mainobj.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(mainobj.length - 1);
    }
  };

  useEffect(() => {
    setBackgroundImage(mainobj[currentSlide].url);
  }, [currentSlide]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger animation when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-effect"); // Add animate class when element is in view
          observer.unobserve(entry.target);
          // Stop observing once animation is triggered
        }
      });
    }, options);

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  // Function to handle animation end
  const handleAnimationEnd = (event) => {
    event.target.classList.add("add-opacity");
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger animation when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-effect-left"); // Add animate class when element is in view
          observer.unobserve(entry.target);
          // Stop observing once animation is triggered
        }
      });
    }, options);

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll-l");
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  // Function to handle animation end
  const handleAnimationEnds = (event) => {
    event.target.classList.add("add-opacity");
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger animation when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-effect-right"); // Add animate class when element is in view
          observer.unobserve(entry.target);
          // Stop observing once animation is triggered
        }
      });
    }, options);

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll-r");
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  // Function to handle animation end
  const handleAnimationEndd = (event) => {
    event.target.classList.add("add-opacity");
  };
  return (
    <>
      <div className="home-no">
        <div className="white" id="home-homediv1"></div>
        <div className="black" id="home-homediv2"></div>
        <div id="home-imagesliderdiv">
          {/* Your slider content here */}
          {/* Use mainobj[currentSlide] to access the content dynamically */}
          <div
            id="home-imageslider"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <h5 className="home-h5">{mainobj[currentSlide].h5}</h5>
            <h1 className="home-h1">{mainobj[currentSlide].h1}</h1>
            <p className="home-p">{mainobj[currentSlide].p}</p>
            <div id="home-viewbtn">
              <AnimatedButton
                style={{
                  backgroundColor: "grey",
                  color: 'isHovered ? "grey" : "black"',
                }}
              >
                <p style={{ paddingRight: "2vh" }}>View Case</p>
              </AnimatedButton>
            </div>
            <div id="home-sidebtndiv">
              <img className="home-sidebtn-img" src={dot} alt="" />
              <img className="home-sidebtn-img" src={dot} alt="" />
              <img className="home-sidebtn-img" src={dot} alt="" />
              <img className="home-sidebtn-img" src={dot} alt="" />
              <img className="home-sidebtn-img" src={dot} alt="" />
              <img className="home-sidebtn-img" src={dot} alt="" />
            </div>
          </div>
          <div id="home-slidercontroldiv">
            <div id="home-leftbtn" onClick={handleBack}>
              <a className="home-sliderprebtn">
                <img src={left} alt="" className="home-hello" />
              </a>
              <p>back</p>
            </div>
            <div id="home-countshow">
              <h1>{currentSlide + 1}</h1>
              <h5>/</h5>
              <h5>{mainobj.length}</h5>
            </div>
            <div id="home-rightbtn" onClick={handleNext}>
              <p>next</p>
              <a className="home-slidernextbtn">
                <img src={right} alt="" className="home-hello" />
              </a>
            </div>
          </div>
        </div>

        <div
          id="home-threepointstrip"
          className="animate-on-scroll"
          onAnimationEnd={handleAnimationEnd}
        >
          <div id="home-point" className="home-box">
            <div className="home-image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                viewBox="0 0 20 20"
              >
                <path d="M17.5 2h-16c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h7.5v2h-3.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h8c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.5v-2h7.5c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM18 13.5c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v10z"></path>
              </svg>
            </div>
            <div className="home-text">
              <h3 className="home-h3">daam bu</h3>
              <h5 className="home-h5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam, culpa!
              </h5>
            </div>
          </div>
          <div id="home-point" className="home-box">
            <div className="home-image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 15h-4c-0.827 0-1.5-0.673-1.5-1.5v-12c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v7c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5h-14c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path>
                <path d="M13 20c-0.19 8 0-0.386-0.119-0.464-0.314l-1.697-4.242-2.963 3.386c-0.137 0.157-0.357 0.212-0.552 0.139s-0.324-0.26-0.324-0.468v-15c0-0.198 0.117-0.377 0.298-0.457s0.392-0.046 0.539 0.087l11 10c0.153 0.139 0.205 0.358 0.13 0.55s-0.26 0.32-0.466 0.32h-4.261l1.726 4.314c0.103 0.256-0.022 0.547-0.279 0.65l-2.5 1c-0.061 0.024-0.124 0.036-0.186 0.036zM11 14c0.028 0 0.056 0.002 0.084 0.007 0.172 0.029 0.315 0.146 0.38 0.307l1.814 4.536 1.572-0.629-1.814-4.536c-0.062-0.154-0.043-0.329 0.050-0.466s0.248-0.22 0.414-0.22h3.707l-9.207-8.37v12.539l2.624-2.999c0.096-0.109 0.233-0.171 0.376-0.171z"></path>
              </svg>
            </div>
            <div className="home-text">
              <h3 className="home-h3">daam bu</h3>
              <h5 className="home-h5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam, culpa!
              </h5>
            </div>
          </div>
          <div id="home-point" className="home-box">
            <div className="home-image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                viewBox="0 0 20 20"
              >
                <path d="M5 15c-0.128 0-0.256-0.049-0.354-0.146l-4-4c-0.195-0.195-0.195-0.512 0-0.707l4-4c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.646 3.646 3.646 3.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"></path>
                <path d="M15 15c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l3.646-3.646-3.646-3.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4 4c0.195 0.195 0.195 0.512 0 0.707l-4 4c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>
                <path d="M7.5 15c-0.091 0-0.182-0.025-0.265-0.076-0.234-0.146-0.305-0.455-0.159-0.689l5-8c0.146-0.234 0.455-0.305 0.689-0.159s0.305 0.455 0.159 0.689l-5 8c-0.095 0.152-0.258 0.235-0.424 0.235z"></path>
              </svg>
            </div>
            <div className="home-text">
              <h3 className="home-h3">daam bu</h3>
              <h5 className="home-h5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam, culpa!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
