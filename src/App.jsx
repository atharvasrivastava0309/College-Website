import React, { useState } from 'react';

// Importing reusable components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {
  // State to manage video play status
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      {/* Navigation bar */}
      <Navbar/>
      
      {/* Hero section - Main landing visual */}
      <Hero/>
      
      <div className="container">
        {/* Section: Programs offered */}
        <Title subTitle='Our BRANCHES' title='What We Offer'/>
        <Programs/>
        
        {/* About section - Passes setPlayState to control video playback */}
        <About setPlayState={setPlayState}/>
        
        {/* Campus gallery section */}
        <Title subTitle='Gallery' title='Life at Poornima'/>
        <Campus/>
        
        {/* Student testimonials section */}
        <Title subTitle="Testimonials" title='What Student Says'/>
        <Testimonials/>
        
        {/* Contact information section */}
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact/>
        
        {/* Footer component */}
        <Footer/>
      </div>
      
      {/* Video Player component - Controlled by playState */}
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>       
    </div>
  );
};

export default App;
