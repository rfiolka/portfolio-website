import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Proj1 from '../assets/img1.jpg'
import "../styles/Project.css"
import {ProjectList} from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='projects'>
      <h1> My personal projects</h1>
      <div className='projectList'>
      {ProjectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={project.image}/>
      })}
    </div>
    </div>
  )
}

export default Projects
