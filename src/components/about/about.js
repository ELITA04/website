import React, { Component } from 'react';
import Pdf from '../../assets/ElitaMenezes.pdf';

export default class About extends Component{
    render() {
      return (
  
        <section id="about">  
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>About</h5>
              <h1>Let me introduce myself.</h1>
            </div>   		
          </div> 
          <div className="row about-content">
            <div className="col-six tab-full">
              <h3>Profile</h3>
              <p>I am currently in the Third Year of Computer Engineering in Fr. Conceicao Rodrigues College of Engineering. I stood first in the first 2 years of Engineering. Also I'm the GUI head of Team Vaayushastra, We DREAM BUILD FLY!</p>
              
              <ul className="info-list">
                <li>
                  <strong>Fullname:</strong>
                  <span>Elita Elroy Menezes</span>
                </li>
                <li>
                  <strong>Birth Date:</strong>
                  <span>November 4, 1999</span>
                </li>
                <li>
                  <strong>Website:</strong>
                  <span>https://elita04.github.io/website</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>elitae.menezes@gmail.com</span>
                </li>
              </ul> 
            </div>
            
            <div className="col-six tab-full">
              <h3>Skills</h3>

              <ul className="skill-bars">
                <li>
                  <div className="progress percent90"><span>90%</span></div>
                  <strong>HTML5</strong>
                </li>
                <li>
                  <div className="progress percent85"><span>85%</span></div>
                  <strong>CSS3</strong>
                </li>
                <li>
                  <div className="progress percent70"><span>70%</span></div>
                  <strong>JQuery</strong>
                </li>
                <li>
                  <div className="progress percent75"><span>75%</span></div>
                  <strong>PHP</strong>
                </li>
                <li>
                  <div className="progress percent70"><span>70%</span></div>
                  <strong>MongoDB</strong>
                </li>
                <li>
                  <div className="progress percent75"><span>75%</span></div>
                  <strong>MySQL</strong>
                </li>
                <li>
                  <div className="progress percent60"><span>60%</span></div>
                  <strong>Node</strong>
                </li>
                <li>
                  <div className="progress percent80"><span>80%</span></div>
                  <strong>Java</strong>
                </li>
                <li>
                  <div className="progress percent85"><span>90%</span></div>
                  <strong>Python</strong>
                </li>
                
              </ul> 	
            </div>
          </div>
          <div className="row button-section">
            <div className="col-twelve">

              <a href={Pdf} title="Download CV" className="button button-primary" download>Download CV</a>
            </div>   		
          </div>

        </section> 
      );
    }
  };