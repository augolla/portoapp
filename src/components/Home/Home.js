import React from 'react';
import './Home.css'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Contact from '../Contact/Contact'


function Home() {
  return(
    <div className='Home' >
      <div className='container d-flex home-container'>
          <div className=''>
            <p className='nameIs'>&nbsp;Hi,my name is</p>
            <h1 className='Title display-4 display-sm-5'>Austin Ogola.</h1>
            <div className='Roles '>
              <div><h6 className='fixen'>&lt; Software Engineer /&gt;</h6></div>
              <div><h6 className='fixen'>&lt; FullStack Developer /&gt;</h6></div>
              <div><h6 className='fixen'>&lt; Data Scientist /&gt;</h6></div>
            </div>
            <button className='btn btn-outline d-flex justify-content-center' title="See Projects">
              <p>See More</p>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
