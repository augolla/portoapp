import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div id='home'><Home /></div>
      <div id='about'><About /></div>
      <div id='projects'><Projects /></div>
      <div id='contact'><Contact /></div>
    </div>
  );
}

export default App;
