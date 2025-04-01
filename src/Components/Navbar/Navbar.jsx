import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/College logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  // State to track if the navbar should be sticky based on scroll position
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    // Adds an event listener to track scrolling and update the sticky state
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  
  // State to manage the mobile menu toggle
  const [mobileMenu, setMobileMenu] = useState(false);
  
  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    // Apply 'dark-nav' class when the navbar becomes sticky
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      {/* Logo */}
      <img src={logo} alt="College Logo" className='logo'/>
      
      {/* Navigation Links */}
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-220} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      
      {/* Mobile Menu Icon */}
      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
