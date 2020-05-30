import React , { Component } from 'react';
import About from './about/about';
import Intro from './intro/intro';
import Portfolio from './portfolio/portfolio';
import Resume from './resume/resume';
import '../App.css';

export default class Final extends Component{
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