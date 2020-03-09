import React , { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render() {
    return (
      <div className='App'>
        <Header />
        <Intro />
        <About />
        <Resume />
        <Portfolio />
      </div>
    );
  }
}

export default App;