import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/aaron.png";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eum
              minima illo eaque, et, harum totam beatae consectetur fugiat nemo
              doloremque ut sunt itaque nihil. Sint, explicabo reiciendis.
              Impedit, inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              dolorum repellendus, esse debitis ducimus voluptatum atque quo
              consequuntur, nulla eum accusamus incidunt. Nostrum nihil placeat
              dolores accusantium iusto perspiciatis quia?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p>
            </div>
            <div className="about-skill">
              <p>CSS</p>
            </div>
            <div className="about-skill">
              <p>React JS</p>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
            </div>
            <div className="about-skill">
              <p>Next JS</p>
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
