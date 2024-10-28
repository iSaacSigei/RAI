import React, { useState, useEffect } from 'react';
import './../../../styles/Testimonials.css';
import image from '../../../images/testimonials_bg.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";
import comments from '../../testimonials';

function Testimonials() {
  const testimonials = Object.keys(comments);

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  // Change focus every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  const currentFocus = testimonials[currentIndex];
  const currentDisplay = comments[currentFocus];

  const nextFocus = testimonials[nextIndex];
  const nextDisplay = comments[nextFocus];

  const previousFocus = testimonials[previousIndex];
  const previousDisplay = comments[previousFocus];

  return (
    <div className='testimonials'>
      {/* .container */}
        <div className="card-container current">
            <h1>Get to hear from the community</h1>
            <button id="left"><FaArrowLeft/></button>
            <button id="right"><FaArrowRight/></button>
            <div className="cards">
              <div className="previous">
                <img src={previousDisplay.image} alt={previousDisplay} />
                <FiChevronsLeft className='left btn'/>
              </div>
              <div className="card">
                <img src={currentDisplay.image} alt={currentDisplay}/>
                <span><RiDoubleQuotesL className='quotation'/></span>
                <p>{currentDisplay.message}</p>
                <h4>~ Enrique Hessy</h4>
              </div>
              <div className="next">
                <img src={nextDisplay.image} alt={nextDisplay.image} />
                {/* <p>testimonials[nextIndex].message</p> */}
                <FiChevronsRight className='right btn'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials