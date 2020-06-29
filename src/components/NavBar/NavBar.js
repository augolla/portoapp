import React from 'react'
import './NavBar.css'
// import Toggle from './ThemeToggle'
import {FiCodesandbox} from 'react-icons/fi'
// import $ from 'jquery'
// import Icon from './icons8-circuit2-96.png'
import {Link} from 'react-scroll';

class NavBar extends React.Component{
  componentDidMount(){
    const toggleButton=document.querySelector('.navbar-toggler')
    const bar1=document.querySelector('.bar1')
    const bar2=document.querySelector('.bar2')
    const bar3=document.querySelector('.bar3')
    const X=document.querySelector('.X')
    bar1.style.transition='all .2s'
    bar2.style.transition='all .2s'
    bar3.style.transition='all .2s'
    X.style.transition='all .2s'
    let open=true
    toggleButton.addEventListener('click',()=>{
      if (open) {
        bar1.style.position='relative'
        bar3.style.position='relative'
        setTimeout(()=>{
          bar1.style.top='0px'
          bar3.style.bottom='0px'
          X.style.display='block'
        },300)
        bar1.style.top='10px'
        bar3.style.bottom='10px'
        bar2.style.display='none'
        open=false
      }else{
        bar1.style.top='0px'
        bar3.style.bottom='0px'
        bar2.style.display='block'
        setTimeout(()=>{
          bar1.style.top='0px'
          bar3.style.bottom='0px'
          bar2.style.display='block'
        },300)
        bar1.style.top='10px'
        bar3.style.bottom='10px'
        X.style.display='none'
        open=true
      }
      })
  }
  reload=()=>{
    window.location.reload()
  }
  render(){
    return(
        <nav className='NavBar navbar navbar-expand-md shadow-lg sticky-top'>
          <div className='navbar-brand' style={{cursor:'pointer'}} onClick={this.reload}>
            <FiCodesandbox color='#64FFDA' size='30px'/>
          </div>
          <div className='navbar-toggler border-0' data-toggle='collapse' data-target="#everything2">
            <div className='bar1'></div>
            <div className='X'>X</div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>

          <div className='collapse navbar-collapse justify-content-end align-items-center p-0 m-0' id='everything2'>
            <nav className='navbar-nav m-0 p-0 d-flex justify-content-center'>
              <Link activeClass='active' spy={true} offset={-80} duration={620} to="home" className='nav-item  nav-link ' smooth={true} >Home</Link>
              <Link activeClass='active' spy={true} offset={-80} duration={620} to="about" className='nav-item nav-link ' smooth={true} >About</Link>
              <Link activeClass='active' spy={true} offset={-80} duration={620} to="projects" className='nav-item nav-link ' smooth={true} >Works/Projects</Link>
              <Link activeClass='active' spy={true} offset={-80} duration={620} to="contact" className='nav-item nav-link ' smooth={true} >Contacts</Link>
            </nav>
          </div>
        </nav>
    )
  }

}

export default NavBar
