import React, { useRef } from "react";
import Slider from "react-slick";
import "../coffee/Coffee.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'
import Counter from "../Components/Counter";

function AutoPlayMethods() {
  let sliderRef= useRef(null);
//   const play = () => {
//     sliderRef.slickPlay();
//   };
//   const pause = () => {
//     sliderRef.slickPause();
//   };

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
              src={require("../Images/csc/Aadhaar.jpeg")}
              alt="Aadhaar"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/csc/PAN.png")}
              alt="Pan"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/csc/Ayushman.jpeg")}
              alt="Ayushman"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/csc/VoterId.jpeg")}
              alt="Hero  1"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/csc/E-sharm.jpeg")}
              alt="E-sharm"
            />
          </div>
          <div className="index-hero-image">
            <img
              src={require("../Images/csc/Ration.jpeg")}
              alt="Ration"
            />
          </div>
        </Slider>
        <h2>Every solution we deliver is built on trust</h2>
        {/* <div
          className="Home-page-play-pause-button"
          style={{ textAlign: "center" }}
        >
          <button className="button" onClick={play}>
            Play
          </button>
          <button className="button" onClick={pause}>
            Pause
          </button>
        </div> */}
        <Counter />
        <div className="skip-line">
          <hr />
          <span><Link to="/signup">Sign_Up</Link></span>
        </div>

<div className="Login-div">
  <button className="login"><Link to="/login" className="link-color">Log in</Link></button>
</div>
      </div>
    </div>
  );
}
export default AutoPlayMethods;
