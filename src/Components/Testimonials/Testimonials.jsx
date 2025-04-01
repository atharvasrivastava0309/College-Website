import React, { useRef } from 'react';
import './Testimonials.css'; // Importing CSS for styling
import next_icon from '../../assets/next-icon.png'; // Importing next button icon
import back_icon from '../../assets/back-icon.png'; // Importing back button icon
import user1 from '../../assets/user1.jpg'; // Importing user images
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpeg';

/**
 * Testimonials Component
 * 
 * This component displays user testimonials in a horizontal slider format.
 * Users can navigate through the testimonials using next and back buttons.
 */
const Testimonials = () => {
  const slider = useRef(); // Creating a reference for the slider
  let tx = 0; // Initial translation value for the slider

  /**
   * slideForward Function
   * 
   * Moves the slider forward by 25% unless it reaches the limit (-50%).
   */
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  /**
   * slideBackward Function
   * 
   * Moves the slider backward by 25% unless it reaches the starting position (0%).
   */
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      {/* Navigation Buttons */}
      <img src={next_icon} alt='Next' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='Back' className='back-btn' onClick={slideBackward} />

      {/* Testimonials Slider */}
      <div className='slider'>
        <ul ref={slider}>
          {/* Individual Testimonial Items */}
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user1} alt='User 1' />
                <div>
                  <h3>Nalini Garg</h3>
                  <span>AI and Data Leader</span>
                </div>
              </div>
              <p>
                I have had the pleasure of visiting my second home recently. The moment I stepped in, all those memories started coming back. Visiting my alma mater reignited memories of the leadership opportunities.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user2} alt='User 2' />
                <div>
                  <h3>Himanshu Rajput</h3>
                  <span>Entrepreneur, IGET Tinker Labs</span>
                </div>
              </div>
              <p>
                Sincerest of Thank You to each & every person who has helped, supported & guided me throughout my tenure. They challenged and pushed me to be better and creative in my startup IGET Tinker Labs.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user3} alt='User 3' />
                <div>
                  <h3>Anushree Jain</h3>
                  <span>BDM, A Class Marble Pvt. Ltd.</span>
                </div>
              </div>
              <p>
                Returning to my alma mater filled me with nostalgia. The familiar sights and sounds brought back fond memories of my time here. It was heartwarming to see how the campus has evolved while still retaining its essence.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user4} alt='User 4' />
                <div>
                  <h3>Chandan Agarwal</h3>
                  <span>SDE, Microsoft</span>
                </div>
              </div>
              <p>
                I was pleasantly surprised by the development and progress on campus since I graduated. The new facilities and infrastructure enhancements reflect a commitment to excellence and growing continuously.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
