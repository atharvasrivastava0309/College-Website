import React from 'react';
import './Title.css';

/**
 * Title Component
 * Reusable component to display section titles with a subtitle.
 * 
 * Props:
 * @param {string} subTitle - The smaller text appearing above the main title.
 * @param {string} title - The main heading text.
 */
const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
      {/* Subtitle */}
      <p>{subTitle}</p>
      
      {/* Main Title */}
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
