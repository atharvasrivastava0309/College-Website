import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import magazinePDF from '../../assets/Magazine.pdf';

const Hero = () => {
  // Function to handle opening the PDF in a new tab
  const handleOpenPDF = () => {
    window.open(magazinePDF, '_blank'); // Opens the PDF file in a new browser tab
  };
  
  return (
    <div className='hero container'>
      {/* Hero section containing text and call-to-action button */}
      <div className='hero-text'>
        <h1>Empowering Young Minds for a Better Tomorrow</h1>
        <p>
          Our innovative curriculum equips students with the essential knowledge, 
          practical skills, and real-world experiences to thrive in today’s evolving 
          educational landscape.
        </p>
        
        {/* Button to open the magazine PDF */}
        <button className='btn' onClick={handleOpenPDF}>
          Explore more <img src={dark_arrow} alt='Arrow Icon'/>
        </button>
      </div>
    </div>
  );
};

export default Hero;
