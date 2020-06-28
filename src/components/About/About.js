import React from 'react';
import {FiPlay} from 'react-icons/fi'
import './About.css'
import SkillCard from './SkillCard'
import Code from '../Icons/Code'
import Webdesign from '../Icons/Webdesign'
import AiBrain from '../Icons/AiBrain'


function About() {
  return(
    <div className='About ' >
      <div className='container About-me'>
        <h1 className='Title1'>About Me</h1>
        <h5>Hello,My name is Austine Ogola</h5>
        <p>I am a full-stack developer,UI/UX designer and Data Scientist based in Nairobi</p>
        <p>I enjoy designing and developing software,especially web-based applications.I build systems from scratch to deployment.I also like working on AI/M.L projects</p>
        <p>Feel free to checkout some of my work on my WORK PAGE</p>
        <p>Have a project,idea or problem you'd like to discuss?Feel free to contact me.</p>
      </div>
      <div className='container What-I-do'>
        <div><div><h3 className='Title2'>What I do</h3></div></div>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='d-flex justify-content-center my-4'><Code/></div>
            <div className='d-flex justify-content-center'>
              <h5>Full-Stack-Development</h5>
            </div>
            <div className='tools row border mx-1 mr-md-4 p-2 pt-3 py-2 py-md-4 mt-3'>
              <ul className='col-md-4 col'>
                <li><p>Javascript</p></li>
                <li><p>Python</p></li>
                <li><p>React</p></li>
                <li><p>Django</p></li>
              </ul>
              <ul className='col-md-4 col'>
                <li><p>GraphQl</p></li>
                <li><p>JQuery</p></li>
                <li><p>Bootstrap</p></li>
                <li><p>MongoDb</p></li>
              </ul>
              <ul className='col-md-4 col'>
                <li><p>Node|Express</p></li>
                <li><p>MySQL</p></li>
                <li><p>HTML/CSS</p></li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='d-flex justify-content-center my-4'><AiBrain/></div>
            <div className='d-flex justify-content-center'><h5>Artificial Intelligence</h5></div>
            <div className='tools row border mx-1 ml-md-4 p-2 pt-3 pl-4 mt-3'>
              <ul className='col-md-6 col'>
                <li><p>Python</p></li>
                <li><p>Tensorflow</p></li>
                <li><p>Pytorch</p></li>
                <li><p>Pandas</p></li>
              </ul>
              <ul className='col-md-6 col'>
                <li><p>OpenCV</p></li>
                <li><p>Scipy</p></li>
                <li><p>Numpy</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
