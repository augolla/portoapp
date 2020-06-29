import React from  'react'
import './ProjectItem.css'
import immgg from './category-4.jpg'
import {DiCodeBadge} from 'react-icons/di'
import {FiDisc} from 'react-icons/fi'

function ProjectItem() {
  // src='https://source.unsplash.com/featured?dog'
  return(
    <div className='ProjectItem col-12 col-md-4 p-2 mb-1' style={{background:'#0A192F',maxHeight:'310px'}}>
      <div className='col-12 p-0'style={{background:'#172A45',minHeight:"300px"}} >
        {/*<img src={immgg} alt='project here' width="100%" />
        <div className='prOverlay d-flex justify-content-center align-items-center'>
        </div>
        <div className='prTitle'>
          <h5>Sample Title</h5>
          <div className='d-flex justify-content-center Icons'>
            <div><FiDisc size='4vh' color='#5DEECB'/></div>
            <div><DiCodeBadge size='4vh' color='#5DEECB'/></div>
          </div>
        </div>
        <div className='prDescription pt-2'>
          <p className=''>
            This part gives brief desciption of the Project.This part gives brief desciption of the Project.This part
            gives briesf description of Project
          </p>
          <p className='prTech'>Python &nbsp; Java &nbsp; C++ &nbsp; HTML/CSS</p>
          <p>...More</p>
        </div>*/}
        <div className='content p-5'>
          <h5>ProjectName</h5>
        </div>
      </div>

    </div>
  )
}

export default ProjectItem
