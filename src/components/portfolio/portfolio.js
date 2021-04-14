import React, { Component } from 'react';
export default class Portfolio extends Component{
    render(){
      return (
  
        <section id="portfolio">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Achievements</h5>
              <div className="description-box">
              <h4>Best Overall Health Hack 2021, organized by Women in Computers at the Stony Brook University - February 2021</h4>		     
              {/* <p>Worked with a remote team to develop a mobile application that provides assistance to the Visually Impaired</p> */}
              </div>
              <div className="description-box">
              <h4>Team Vaayushastra stood 9th in the SAE Aero Design Competition held in The USA - March 2020</h4>		     
              {/* <p>Design an Unmanned Ariel Vehicle to colonise Mars</p> */}
              </div>
              <div className="description-box">
              <h4>Winner of SPIT hackathon - February 2020</h4>		     
              {/* <p>Malware detection using machine learning</p> */}
              </div>
              <div className="description-box">
              <h4>First runner up of DMCE hackathon - January 2020</h4>		     
              {/* <p>Using CBT techniques and AI to diagnose/track/tackle mental health issues</p> */}
            </div>	
            <div className="description-box">
              <h4>Winner of VCET hackathon - December 2020</h4>		     
              {/* <p>Depression tracking using social media (twitter)</p> */}
            </div>
            </div>   		
          </div> 
            
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Portfolio</h5>
              <h1>Check Out Some of My Works.</h1>
            </div>   		
          </div> 
          <div className="row portfolio-content">
            <div className="col-twelve">
              <div className="description-box">
                <h4>HelpVu</h4>	
                <a href = "https://www.youtube.com/watch?v=a2HpMBLEoFg&feature=emb_title" style={{cursor: 'pointer', color : '#FF0077'}}>Check it out</a>	      
                <p>An AI-powered narration application that can provide assistance to the visually impaired. It uses Object Detection and OCR techniques along with text-to-speech to do so.</p>	               
              </div>	

              <div className="description-box">
                <h4>Corona Live Updates Bot</h4>	
                <a href = "https://t.me/corona_em_bot" style={{cursor: 'pointer', color : '#FF0077'}}>Check it out</a>	      
                <p>A telegram bot which provides updates about cases in Indian states and districts.It also provides news updates from the WHO website and precautions to be taken during the pandemic.</p>	               
              </div>	

              <div className="description-box">
                <h4>ml4E</h4>		   
                <a href = "http://ml4e.herokuapp.com/" style={{cursor: 'pointer', color : '#FF0077'}}>Check it out</a>   
                <p>ml4E is a user friendly web-based application that provides tools for data preprocessing, implementation of Machine Learning algorithms, and visualization tools so that you can develop machine learning techniques and apply them to real-world data mining problems.</p>
              </div> 

              <div className="description-box">
                <h4>Sorting Algorithm Visualizer</h4>		   
                <a href = "https://elita04.github.io/website/#/SortingVisualizer" style={{cursor: 'pointer', color: '#FF0077'}}>Check it out</a>   
                <p>A react application that helps visualizing the different sorting algorithms (Quick sort, Merge Sort, Bubble Sort, Selection Sort, Insertion Sort)</p>
              </div> 
            
              <div className="description-box">
                <h4>Fake News Detection</h4>		      
                <p>A flask application that helps detecting fake news using machine learning models which makes use of text by web-scraping from links provided and also detects whether a video is fake or real based on the transcripts.</p>	               
              </div>	      
            
              <div className="description-box">
                <h4>KEDS (Depression Help Provider Application)</h4>		      
                <p>An android application that detects and tracks your mood using social media and suggest therapeutic exercises using CBT.</p>
              </div>    
            <div className="description-box">
                <h4>Face Recognizer</h4>		      
                <p>A machine learning model that is trained using images of faces of celebrities and tagging features like hair (straight, curly, wavy, long, short, color, etc), nose, ear, eyes, face shape, etc</p>             
              </div>	      
                
              </div> 
            </div>  
        </section>
      );
    }
  };