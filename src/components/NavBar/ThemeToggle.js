import React,{Component} from 'react'
import './ThemeToggle.css'

class ThemeToggle extends Component{
  componentDidMount(){
    const ThemeToggle=document.querySelector('.ThemeToggle')
    const toggleCircle=document.querySelector('.toggleCircle')
    const toggleBack=document.querySelector('.toggleBack')


    const NavBar=['.App','.NavBar','.bar1','.bar2','.bar3','.X','.Home','.Title','.About']

    let change=true
    ThemeToggle.addEventListener('click',()=>{
      if (change) {
        toggleCircle.style.left='20px'
        toggleCircle.style.background='#0A192F'
        toggleBack.style.background='#51CAB5'
        for (var item of NavBar) {
          document.querySelector(item).style.background="#7290A4"
          document.querySelector(item).style.color='white'
        }
        document.querySelector('.nameIs').style.color='black'
        for (var h of document.querySelectorAll('.fixen')) {
          h.style.color='#B9C8D2'
        }

        change=false
      }else{
        toggleCircle.style.left='1px'
        toggleCircle.style.background='#FFFFFF'
        toggleBack.style.background='#7290A4'
        for (var item of NavBar) {
          let item2=item
          document.querySelector(item).style.background="#0A192F"
          document.querySelector(item2).style.color='#64FFDA'
        }
        document.querySelector('.Title').style.color="#CCD6F6"
        document.querySelector('.nameIs').style.color='#64FFDA'
        for (var h of document.querySelectorAll('.fixen')) {
          h.style.color='#8892B0'
        }
        change=true
      }
    })
  }
  render(){
    return(
      <div className='ThemeToggle'>
        <div className='toggleBack' style={{}}></div>
        <div className='toggleCircle'></div>
      </div>
    )
  }
}

export default ThemeToggle
