import React, { useState, useEffect } from "react";
import "./About.css";
import profile_img from "../../assets/aaron.png";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about" className="about">
      <div className="about-title" style={{ transform: `translateX(-${scrollY}px)` }}>
        <h1>About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eum minima illo eaque, et, harum totam
              beatae consectetur fugiat nemo doloremque ut sunt itaque nihil. Sint, explicabo reiciendis. Impedit,
              inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolorum repellendus, esse debitis ducimus
              voluptatum atque quo consequuntur, nulla eum accusamus incidunt. Nostrum nihil placeat dolores accusantium
              iusto perspiciatis quia?
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
