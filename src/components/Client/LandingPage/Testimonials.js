import React, { useState, useEffect } from 'react';
import './../../../styles/Testimonials.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";
import comments from '../../testimonials';

function Testimonials() {
  const testimonials = Object.keys(comments);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentFocus = testimonials[currentIndex];
  const currentDisplay = comments[currentFocus];
  const nextFocus = testimonials[nextIndex];
  const nextDisplay = comments[nextFocus];
  const previousFocus = testimonials[previousIndex];
  const previousDisplay = comments[previousFocus];

  return (
    <div className='testimonials-wrapper'>
        <div className="testimonial-card-container">
            <h1>Get to hear from the community</h1>
            <button id="testimonial-left"><FaArrowLeft/></button>
            <button id="testimonial-right"><FaArrowRight/></button>
            <div className="testimonial-cards">
              <div className="testimonial-previous">
                <img src={previousDisplay.image} alt="Previous Testimonial" />
                <FiChevronsLeft className='testimonial-btn-left'/>
              </div>
              <div className="testimonial-card">
                <img src={currentDisplay.image} alt="Current Testimonial"/>
                <span><RiDoubleQuotesL className='testimonial-quotation'/></span>
                <p>{currentDisplay.message}</p>
                <h4>~ Enrique Hessy</h4>
              </div>
              <div className="testimonial-next">
                <img src={nextDisplay.image} alt="Next Testimonial" />
                <FiChevronsRight className='testimonial-btn-right'/>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Testimonials;
