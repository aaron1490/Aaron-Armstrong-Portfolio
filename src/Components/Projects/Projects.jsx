import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="project-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
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
