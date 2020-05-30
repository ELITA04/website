import React , { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'; 
import About from './components/about/about';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import './App.css';

class App extends Component{
  render() {
    return (
      <div className='App'>

        <Intro />
        <About />
        <Resume />
        <Portfolio />
      </div>
    );
  }
}

export default App;