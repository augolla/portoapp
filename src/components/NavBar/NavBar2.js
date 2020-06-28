import React,{Component} from 'react'
import './NavBar2.css'
import $ from 'jquery'
import Icon from './icons8-circuit2-96.png'
import {Link,animateScroll as scroll} from 'react-scroll';

class NavBar2 extends Component {
  constructor() {
    super()
  }
  componentDidMount(){
    console.log(document.getElementsByTagName('Link'));
  }

  render(){
    return(
      <nav className='NavBar2 navbar navbar-expand-md shadow-lg'>
        <a href='#' className='navbar-brand'><img src={Icon} style={{width:'0px',marginBottom:'15px'}}/></a>
        <div className='navbar-toggler ' data-toggle='collapse' data-target="#everything2">
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar2'></div>
        </div>

        <div className='collapse navbar-collapse d-flex justify-content-end' id='everything2'>
          <nav className='navbar-nav'>
            <Link activeClass='active' spy={true} offset={-80} duration={620} to="home" className='nav-item active nav-link ' smooth={true} >Home</Link>
            <Link activeClass='active' spy={true} offset={-80} duration={620} to="about" className='nav-item active nav-link ' smooth={true} >About</Link>
            <Link activeClass='active' spy={true} offset={-80} duration={620} to="projects" className='nav-item active nav-link ' smooth={true} >Works/Projects</Link>
            <Link activeClass='active' spy={true} offset={-80} duration={620} to="contact" className='nav-item active nav-link ' smooth={true} >Contacts</Link>
          </nav>
        </div>
      </nav>
      
    )
  }
}

export default NavBar2
