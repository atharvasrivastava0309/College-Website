import React from 'react';
import './Programs.css';
import program1 from '../../assets/program1.jpg';
import program2 from '../../assets/program2.jpg';
import program3 from '../../assets/program3.png';
import program4 from '../../assets/program4.jpg';
import program5 from '../../assets/program5.png';
import program6 from '../../assets/program6.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';

const Programs = () => {
  return (
    <>
      {/* First Row of Program Cards */}
      <div className='programs'>
        <div className='program'>
          <img src={program1} alt='Computer Science Engineering'/>
          <div className='caption'>
            <img src={icon1} alt='Icon'/>
            <p>Computer Science Engineering</p>
          </div>
        </div>
        <div className='program'>
          <img src={program2} alt='Information Technology'/>
          <div className='caption'>
            <img src={icon2} alt='Icon'/>
            <p>Information Technology</p>
          </div>
        </div>
        <div className='program'>
          <img src={program3} alt='Civil Engineering'/>
          <div className='caption'>
            <img src={icon3} alt='Icon'/>
            <p>Civil Engineering</p>
          </div>
        </div>      
      </div>
      
      {/* Second Row of Program Cards */}
      <div className='programs programs1'>
        <div className='program'>
          <img src={program4} alt='Mechanical Engineering'/>
          <div className='caption'>
            <img src={icon4} alt='Icon'/>
            <p>Mechanical Engineering</p>
          </div>
        </div>
        <div className='program'>
          <img src={program5} alt='Electrical Engineering'/>
          <div className='caption'>
            <img src={icon5} alt='Icon'/>
            <p>Electrical Engineering</p>
          </div>
        </div>
        <div className='program'>
          <img src={program6} alt='Electronics & Communication Engineering'/>
          <div className='caption'>
            <img src={icon6} alt='Icon'/>
            <p>Electronics & Communication Engineering</p>
          </div>
        </div>      
      </div>
    </>
  );
};

export default Programs;