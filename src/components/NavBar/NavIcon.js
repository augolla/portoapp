import React from 'react'
import './NavIcon.css'
import $ from 'jquery'
import {Spin} from 'react-burgers'

function NavIcon() {

  return(
      <nav className='navbar navbar-default' role='navigation'>
        <div claa='navbar-header'>
          <button type='button' className='navbar-toggle x collapsed' data-toggle='collapse' data-target='#target'>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand' href="#">Brand</a>
        </div>
        <div className='collapse navbar-collapse' id='target'>
          <ul className='nav navbar-nav navbar-right'>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
      </nav>
  )
}

export default NavIcon
