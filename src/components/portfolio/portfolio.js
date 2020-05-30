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
              <div className="description-box">
                <h4>Corona Live Updates Bot</h4>		      
                <p>A telegram bot which provides updates about cases in Indian states and districts.It also provides news updates from the WHO website and precautions to be taken during the pandemic.</p>	               
              </div>	
            </div>
            <div id="modal-02" className="popup-modal slider mfp-hide">	
              <div className="description-box">
                <h4>Fake News Detection</h4>		      
                <p>A flask application that helps detecting fake news using machine learning models which makes use of text by web-scraping from links provided and also detects whether a video is fake or real based on the transcripts.</p>	               
              </div>	      
            </div> 
            <div id="modal-03" className="popup-modal slider mfp-hide">	
            <div className="description-box">
                <h4>Sorting Algorithm Visualizer</h4>		      
                <p>A react application that helps visualizing the different sorting algorithms (Quick sort, Merge Sort, Bubble Sort, Selection Sort, Insertion Sort)</p>
              </div> 
            </div>
            <div id="modal-04" className="popup-modal slider mfp-hide">	
              <div className="description-box">
                <h4>KEDS (Depression Help Provider Application)</h4>		      
                <p>An android application that detects and tracks your mood using social media and suggest therapeutic exercises using CBT.</p>
              </div>    
            </div> 
            <div id="modal-05" className="popup-modal slider mfp-hide">	  	
            <div className="description-box">
                <h4>Face Recognizer</h4>		      
                <p>A machine learning model that is trained using images of faces of celebrities and tagging features like hair (straight, curly, wavy, long, short, color, etc), nose, ear, eyes, face shape, etc</p>             
              </div>	      
            </div>
                
              </div> 
            </div>  
        </section>
      );
    }
  };