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
      <div
        className="about-title"
        style={{ transform: `translateX(-${scrollY}px)` }}
      >
        <h1>
          About Me About Me About Me About Me About Me About Me
          <span> About Me</span> About Me About Me About Me  <span>About Me</span> About Me
          About Me About Me About Me About Me About Me
        </h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Aaron Armstrong, a newly graduated ex-recruitment consultant
              turned front-end developer based in London, UK.
            </p>
            <p>
              My recent transition into the world of front-end development, has
              been fueled by my desire to combine my technical skills with my
              passion for creating user-friendly experiences. With a focus on
              clean code and intuitive design, I’m excited to grow within this
              space and make a meaningful impact.
            </p>
            <p>
              Having worked in recruitment, I understand the importance of
              building strong relationships and delivering tailored solutions to
              meet clients's needs. This experience has equipped me with
              invaluable communication and interpersonal skills, which I am
              eager to leverage.
            </p>
            <p>
              Through intensive training and hands on projects, I have acquired
              proficiency in HTML, CSS, JavaScript and various other frameworks
              such as React.js and Bootstrap. I am excited about the opportunity
              to apply my technical expertise to create innovative and impactful
              web solutions
            </p>
            <p>
              I'm currently looking for my first front-end developer
              opportunity. Please reach out to me if you would like to discuss.
            </p>
          </div>
        </div>
      </div>

      <div className="about-skills">
        <div className="about-skill">
          <p>HTML</p>
        </div>
        <div className="about-skill">
          <p>CSS</p>
        </div>
        <div className="about-skill">
          <p>React</p>
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
        <div className="about-skill">
          <p>jQuery</p>
        </div>
        <div className="about-skill">
          <p>APIs</p>
        </div>
        <div className="about-skill">
          <p>JSON</p>
        </div>
        <div className="about-skill">
          <p>Jest</p>
        </div>
        <div className="about-skill">
          <p>Vitest</p>
        </div>
        <div className="about-skill">
          <p>Vite</p>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>LANGUAGES & FRAMEWORKS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
