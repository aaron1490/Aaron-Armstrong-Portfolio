import React from "react";
import "./Hero.css";
import profile_img from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span> Aaron Armstrong,</span> a Front-End Developer based in London.
      </h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">Download my resume</div>
      </div>
    </div>
  );
};

export default Hero;
