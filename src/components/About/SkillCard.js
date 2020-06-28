import React from 'react'
import './About.css'

function SkillCard(props) {
  return(
    <div>
      <div className='col-4'>
        <div className='d-flex justify-content-center'>{props.Icon}</div>
        <div className='d-flex justify-content-center'><h6>{props.title}</h6></div>
      </div>
    </div>
  )
}


export default SkillCard
