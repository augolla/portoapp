import React from 'react';
import './App.css';
import Delayed from './components/Delayed'
import Loading from './components/Loading'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'


function App() {
  return (
    <div className="App">
      <Delayed waitBeforeShow={3500}>
        <NavBar/>
        <div id='home'><Home /></div>
        <div id='about'><About /></div>
        <div id='projects'><Projects /></div>
        <div id='contact'><Contact /></div>
      </Delayed>
      <Loading/>
    </div>
  );
}

export default App;
