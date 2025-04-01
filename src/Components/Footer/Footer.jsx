import React from 'react';
import './Footer.css'; // Importing CSS file for styling

/**
 * Footer Component
 * This component renders the footer section of the webpage,
 * displaying copyright information and important policy links.
 */
const Footer = () => {
  return (
    <div className='footer'> {/* Footer container */}
        <p>© 2024 Poornima. All rights reserved.</p> {/* Copyright text */}
        <ul> {/* List of legal links */}
            <li>Terms of Services</li> {/* Terms of Service link */}
            <li>Privacy Policy</li> {/* Privacy Policy link */}
        </ul>
    </div>
  );
}

export default Footer; // Exporting the component for use in other parts of the application

