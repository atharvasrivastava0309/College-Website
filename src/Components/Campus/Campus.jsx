import React from 'react';
import './Campus.css'; // Importing the CSS file for styling
import gallery1 from '../../assets/gallery1.jpg'; // Importing gallery images
import gallery2 from '../../assets/gallery2.jpeg';
import gallery3 from '../../assets/gallery3.jpg';
import white_arrow from '../../assets/white-arrow.png'; // Importing arrow icon for button

/**
 * Campus Component
 * The gallery in navbar is the campus component
 * This component showcases a gallery of campus images and a button to redirect users
 * to the college's official Instagram page for more images.
 */
const Campus = () => {
  /**
   * handleRedirect Function
   * 
   * Opens the Poornima College Instagram page in a new tab when the button is clicked.
   */
  const handleRedirect = () => {
    window.open('https://www.instagram.com/poornimacollege/', '_blank');
  };

  return (
    <div className='campus'>
      {/* Image Gallery Section */}
      <div className='gallery'>
        <img src={gallery1} alt='Campus view 1' />
        <img src={gallery2} alt='Campus view 2' />
        <img src={gallery3} alt='Campus view 3' />
      </div>
      
      {/* Redirect Button to Instagram */}
      <button className='btn dark-btn' onClick={handleRedirect}>
        See more
        <img src={white_arrow} alt='Arrow icon' />
      </button>
    </div>
  );
};

export default Campus;