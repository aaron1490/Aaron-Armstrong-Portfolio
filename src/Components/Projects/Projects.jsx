import React, { useState, useEffect } from "react";
import './Projects.css'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {

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
    <div id='projects' className='projects'>
      <div className="project-title" style={{ transform: `translateX(-${scrollY}px)` }}>
        <h1>My Latest Work My Latest Work My Latest Work My Latest Work My Latest Work My Latest Work My Latest Work My Latest Work My Latest Work My Latest Work My Latest Work My Latest Work</h1>
      </div>
      <div className="project-container">
      {mywork_data.map((work,index) => {
        return <img key={index} src={work.w_img} alt="" />
      })}
      </div>
      <div className="project-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Projects
