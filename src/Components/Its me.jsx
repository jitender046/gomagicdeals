import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faSkype,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typed from "typed.js";
function Itsme() {
  const typedOptions = {
    strings: ["Web Designer", "QA Analyst"],
    typeSpeed: 10,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  };

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const typed = new Typed(textRef.current, typedOptions);
      return () => {
        typed.destroy();
      };
    } else {
      console.error("Element with class 'text' not found.");
    }
  }, [typedOptions]);

  return (
    <>
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Jitender Saini</h1>
        <h3>And I'm a <span ref={textRef} className="text"></span></h3>
        <p>
          I'm a Web Designer. My expertise in both Web Designer and QA Analyst.
          My goal is to provide solutions that not only look good but also deliver
          good results. I keep updating my skills and technical knowledge. I
          strive to provide the best solutions that meet clients' needs.
        </p>
        <div className="home-scl">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faSkype} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <a href="#" className="btn-box">
          More About Me
        </a>
      </div>
      <div className="home-image">
        <span className="home-imgHover"></span>
      </div>
    </section>

<section class="about" id="about">
<div class="about-img">
<img src={require("../Images/wallpaper/About.png")} alt=""/>
</div>
<div class="about-text">
    <h2>About <span>Me</span></h2>
    <h4>QA analyst </h4>
    <p>
        I'm Jitender Saini & I'm from Panipat.I have passed my Computer Science Engineering Diploma from GBN Government College Nilokheri (Karnal).
        Along with my diploma I've completed HTML, CSS,javaScript and React.Now I'm ready to apply my knowledge into practice.Though I do not have any real life working experience, I've  had a lot of exposure to the software field.
        My Goal is to build a successfull career as a Full Stack Developer.Moving forward in my career I hope to expand my experience across different industries.
        I'm a good learner and team player
        That's all about my self.
    </p>
    <a href="#" class="btn-box">More About Me</a>
</div>
</section>
</>

  );
}

export default Itsme;