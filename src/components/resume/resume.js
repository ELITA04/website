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
                    <h3>Data Analyst </h3>
                    <p>August 2020 - October 2020</p>
                  </div>
                  <div className="timeline-content">
                    <h4>KYC Hub</h4>
                    <p>Contributed to creating a dataset by web-scraping news websites to extract different sections. </p>
                    <p>Also worked on fine-tuning object detection models to correctly identify different sections on a news website.</p>
                  </div>
                </div>            
              </div>  			
            </div>
            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-file-code-o" />
                  </div>
                  <div className="timeline-header">
                    <h3>Chatbot Developer </h3>
                    <p>June 2020 - July 2020</p>
                  </div>
                  <div className="timeline-content">
                    <h4>Dew Solutions</h4>
                    <p>Built a COVID19 survey bot using the Rasa framework that
                      aids the research and analysis of awareness in society. This
                      bot collected the responses of the user and saved it in an
                      excel sheet for data analysis. </p>
                      <p>Deployed the Bot using DigitalOcean Droplet.</p>
                  </div>
                </div>            
              </div>  			
            </div>
            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-file-code-o" />
                  </div>
                  <div className="timeline-header">
                    <h3>Machine Learning Intern  </h3>
                    <p>March 2020 - July 2020</p>
                  </div>
                  <div className="timeline-content">
                    <h4>Cloud Counselage</h4>
                    <p>Built a recommendation system to successfully extract
                    domains and events from texts and accordingly
                    recommend events to the users as per their liking. </p>
                    <p>Wrote and maintained technical and functional
                    specifications to document project intentions and
                    requirements.</p>
                  </div>
                </div> 
              </div>  			
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
                    <p>
                    Developed a portal for teachers and students to automate
                    training and placement process. 
                    </p>
                    <p>
                      Developed user interfaces with modern JavaScript
                    frameworks, HTML5 and CSS3 and backend using PHP with a MySQL database.
                    </p>
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
                    <p>Fourth Year of Computer Engineering
                    <br />Current CGPA : 9.76</p>
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