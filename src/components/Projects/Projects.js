import React from 'react';
import './Project.css'
import ProjectItem from './ProjectItem'


function Projects() {
  return(
    <div className='Projects container' >
      <h2 className='Title4'>Some Projects I'Ve Done*</h2>
      <div className='row p-0'>
        <ProjectItem
           projectTitle='Reep'
           projectDescribe='A Google Keep clone made with Rect and Firebase'
           techUsed={['React','Node','Firebase','MySQL']}
           codelink='https://github/augolla'
          />
        <ProjectItem
           projectTitle='Tetris Clone'
           projectDescribe='A simple Tetris Clone'
           techUsed={['Javascript','React']}
           codelink='https://github.com/augolla/tetris03.git'
           />
         <ProjectItem
           projectTitle='FreshFoods'
           projectDescribe='An simple ecommerce site for groceries'
           techUsed={['Javascript','React','Python','Django']}
           codelink='https://github/augolla'
          />
        <ProjectItem projectTitle='Gaze'
          projectDescribe='An experimental facial recognition login system for addon*'
          techUsed={['Javascript','Python','Tensorflow']}
          codelink='https://github/augolla'
          />
        <ProjectItem projectTitle='Recipr'
          projectDescribe='Input what you want to have for dinner and/or your available ingredients have and get recipes in order of complexity'
          techUsed={['Javascript','MongoDB','GraphQL','Node/Express','React']}
          codelink='https://github/augolla'
          />
      </div>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-outline d-flex justify-content-center projButton' title="Currently Unavailable">
          <p>See More Projects</p>
        </button>
      </div>
    </div>
  )
}

export default Projects
