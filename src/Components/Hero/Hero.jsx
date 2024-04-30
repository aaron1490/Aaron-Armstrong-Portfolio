import React from "react";
import "./Hero.css";
import profile_img from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Aaron_Armstrong_CV.pdf";
import github_icon from "../../assets/github_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span> Aaron Armstrong</span>, a Front-End Developer based in London.
      </h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} download>
            Download my resume
          </a>

        </div>
        <div className="link-button">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aaron-armstrong23/"
          >
            <img src={linkedin_icon} alt="" />
          </a>
        </div>
        <div className="link-button">
          <a target="_blank" href="https://github.com/aaron1490">
            <img src={github_icon} alt="" />
          </a>
        </div>
      </div>
      <div className="link-buttons">
    <a
      target="_blank"
      href="https://www.linkedin.com/in/aaron-armstrong23/"
    >
      <img src={linkedin_icon} alt="" />
    </a>
    <a target="_blank" href="https://github.com/aaron1490">
      <img src={github_icon} alt="" />
    </a>
  </div>
    </div>
  );
};

export default Hero;
