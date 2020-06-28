import React from 'react';
import './Project.css'
import ProjectItem from './ProjectItem'


function Projects() {
  return(
    <div className='Projects container' >
      <h2 className='Title4'>Some Projects I'Ve Done</h2>
      <div className='row p-0'>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
      </div>
    </div>
  )
}

export default Projects
