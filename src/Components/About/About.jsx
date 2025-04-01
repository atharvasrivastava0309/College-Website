import React from 'react'
import './About.css' // Importing the CSS file for styling
import about_image from '../../assets/about-image.png' // Importing the about section image
import play_icon from '../../assets/play-icon.png' // Importing the play icon image

/**
 * About Component
 * 
 * This component displays an "About College" section with an image, a play button, and descriptive text.
 * It consists of two sections:
 * 1. Left Section: Displays an image with a play icon overlay, triggering a function when clicked.
 * 2. Right Section: Contains heading and descriptive text about the college.
 * 
 * Props:
 * @param {Function} setPlayState - Function to update the play state when the play icon is clicked.
 */
const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      {/* Left Section - Displays an image with a play icon overlay */}
      <div className='about-left'>
        <img src={about_image} className='about-img' alt='About College' />
        {/* Clicking the play icon triggers the setPlayState function */}
        <img src={play_icon} className='play-icon' alt='Play Video' onClick={() => setPlayState(true)} /> 
      </div>
      
      {/* Right Section - Contains text information about the college */}
      <div className='about-right'>
        <h3>ABOUT COLLEGE</h3>
        <h2>Inspiring Future Leaders, Shaping the Future</h2>
        <p>
          Embark on a life-changing educational journey with our college's diverse and dynamic programs. 
          Designed to equip students with the essential knowledge, practical skills, and real-world experiences, 
          our curriculum lays a solid foundation for success in the ever-evolving education sector.
        </p>
        <p>
          Through innovative teaching methodologies, hands-on training, and dedicated mentorship, 
          our programs empower future educators to thrive as changemakers in classrooms, schools, and 
          broader educational environments, fostering positive impact at every level.
        </p>
        <p>
          Whether your passion lies in computer science, mechanical, civil, or electronics, our carefully 
          curated programs offer the ideal platform to explore your potential, pursue your ambitions, and 
          contribute meaningfully to the future of education.
        </p>    
      </div>
    </div>
  )
}

export default About
