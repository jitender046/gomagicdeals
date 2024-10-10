import React, { useRef } from "react";
import Slider from "react-slick";
import "./Coffee.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlayMethods() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="CoffeeCards">
      <div className="slider-container">
        <Slider
          ref={(slider) => (sliderRef = slider)}
          {...settings}
          className="slider"
        >
          <div className="index-hero-image">
            <img
              src={require("../Images/slider/index-hero-1.png")}
              alt="Hero  1"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/slider/index-hero-2.png")}
              alt="Hero  2"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/slider/index-hero-3.png")}
              alt="Hero  3"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/slider/index-hero-1.png")}
              alt="Hero  1"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/slider/index-hero-2.png")}
              alt="Hero  2"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/slider/index-hero-3.png")}
              alt="Hero  3"
            />
          </div>
        </Slider>
        <h2>Best Coffee in the world</h2>
        <div
          className="Home-page-play-pause-button"
          style={{ textAlign: "center" }}
        >
          <button className="button" onClick={play}>
            Play
          </button>
          <button className="button" onClick={pause}>
            Pause
          </button>
        </div>
        <div className="skip-line">
          <hr />
          <span>Sign_Up</span>
        </div>

<div className="Login-div">
  <button className="login">Log in</button>
</div>
      </div>
    </div>
  );
}
export default AutoPlayMethods;
