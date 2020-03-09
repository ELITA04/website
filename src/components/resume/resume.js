import React, { Component } from 'react';
export default class Resume extends Component{
    render() {
      return (
  
        <section id="resume" className="grey-section">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Resume</h5>
              <h1>More of my credentials.</h1>

            </div>   		
          </div> 
          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Internship Experience</h2>
            </div>
            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-file-code-o" />
                  </div>
                  <div className="timeline-header">
                    <h3>Internship and Training Placement Website </h3>
                    <p>December 2019 - February 2020</p>
                  </div>
                  <div className="timeline-content">
                    <h4>Fr. Conceicao Rodrigues College of Engineering</h4>
                    <p>Automated the whole process of internship and training placement approval for the college. The project was designed using PHP and MySQL as per the college requirements.</p>
                  </div>
                </div> 
               
              </div>  			
            </div>
          </div> 
          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Education</h2>
            </div> 
            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap" />
                  </div>
                  <div className="timeline-header">
                    <h3>Bachelor Degree</h3>
                    <p>July 2017 - June 2021</p>
                  </div>
                  <div className="timeline-content">
                    <h4>Fr Conceicao Rodrigues College of Engineering.</h4>
                    <p>Third Year of Computer Engineering
                    <br />Current CGPA : 9.7</p>
                  </div>
                </div>
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap" />
                  </div>
                  <div className="timeline-header">
                    <h3>College Degree</h3>
                    <p>June 2015 - April 2017</p>
                  </div>
                  <div className="timeline-content">
                    <h4>St Xavier's College, Fort</h4>
                    <p>Percentage obtained : 85.23%</p>
                  </div>
                </div> 
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap" />
                  </div>
                  <div className="timeline-header">
                    <h3>School Degree</h3>
                    <p>June 2015 - April 2014</p>
                  </div>
                  <div className="timeline-content">
                    <h4>St Blaise School Amboli</h4>
                    <p>Percentage obtained : 91.80%</p>
                  </div>
                </div>
              </div> 	
            </div>
          </div> 
        </section>
      );
    }
  };