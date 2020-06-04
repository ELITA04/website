import React, { Component } from 'react';

export default class Intro extends Component{
    render() {
      return (
  
        <section id="intro">   
          <div className="intro-overlay" />	
          <div className="intro-content">
            <div className="row">
              <div className="col-twelve">
                <h5>Hello, World.</h5>
                <h1>I'm Elita Menezes.</h1>
                <p className="intro-position">
                  <span>AI/ML Enthusiast</span>
                </p>
                <p className="intro-position">
                  <span>Full Stack Developer</span>
                </p>
              </div>  
            </div>   		 		
          </div> 
          <ul className="intro-social">        
            <li><a href="https://www.facebook.com/elita.menezes.14"><i className="fa fa-facebook" /></a></li>
            <li><a href="https://github.com/ELITA04"><i className="fa fa-github" /></a></li>
            <li><a href="https://www.linkedin.com/in/elita-menezes-5752a618a/"><i className="fa fa-linkedin" /></a></li>
            
          </ul>     	
        </section> 
      );
    }
  };