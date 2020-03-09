import React, { Component } from 'react';
export default class Portfolio extends Component{
    render(){
      return (
  
        <section id="portfolio">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Portfolio</h5>
              <h1>Check Out Some of My Works.</h1>
            </div>   		
          </div> 
          <div className="row portfolio-content">
            <div className="col-twelve">
              
              
                <div id="modal-01" className="popup-modal slider mfp-hide">	
                  {/* <div className="media">
                    <img src="images/portfolio/modals/m-liberty.jpg" alt="" />
                  </div>      	 */}
                  <div className="description-box">
                    <h4>KEDS (Depression Help Provider Application)</h4>		      
                    <p>An android application that detects and tracks your mood using social media and suggest therapeutic exercises using CBT.</p>
                    
                  </div>    
                </div>
                <div id="modal-02" className="popup-modal slider mfp-hide">	
                  {/* <div className="media">
                    <img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
                  </div>      	 */}
                  <div className="description-box">
                    <h4>Fake News Detection</h4>		      
                    <p>A flask application that helps detecting fake news using machine learning models which makes use of text by web-scraping from links provided and also detects whether a video is fake or real based on the transcripts.</p>	               
                  </div>	      
                </div> 
                <div id="modal-03" className="popup-modal slider mfp-hide">	
                  {/* <div className="media">
                    <img src="images/portfolio/modals/m-clouds.jpg" alt="" />
                  </div>      	 */}
                  <div className="description-box">
                    <h4>Face Recognizer</h4>		      
                    <p>A machine learning model that is trained using images of faces of celebrities and tagging features like hair (straight, curly, wavy, long, short, color, etc), nose, ear, eyes, face shape, etc</p>             
                  </div>	      
                </div>
                <div id="modal-04" className="popup-modal slider mfp-hide">	
                  {/* <div className="media">
                    <img src="images/portfolio/modals/m-beetle.jpg" alt="" />
                  </div>      	 */}
                  <div className="description-box">
                    <h4>GetFit</h4>		      
                    <p>A Django application developed to keet track of fitness of an individual and also provides diet and exercises based on a person's BMI.</p>               
                  </div>		      
                </div> 
                <div id="modal-05" className="popup-modal slider mfp-hide">	  	
                  <div className="description-box">
                    <h4>QuizUP</h4>		      
                    <p>A Node application to replace the current quiz systems in colleges, it keeps track of students performances and helps teachers add quizzes with ease.</p>             
                  </div>	      
                </div>
                
              </div> 
            </div>  
        </section>
      );
    }
  };