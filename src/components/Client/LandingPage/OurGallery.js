import React from 'react';
import '../../../styles/OurGallery.css'; // Your custom CSS
import Image1 from '../../../images/CA-Black-student-scores.jpg';
import Image2 from '../../../images/How-can-technology-help-teachers-in-the-classroom_.jpg';
import Image3 from '../../../images/Implementing-active-learning-and-student-centered-pedagogy.jpg';
import Image4 from '../../../images/a1b7e5_7e8bcb716d834bb596b645a1a943db3e~mv2.webp';
import Image5 from '../../../images/classroom-st-georges-school-in-rajasthan-jaisalmer-rajasthan-india-2N57HE2.jpg';

const OurGallery = () => {
  return (
    <div className="gallery-container">
      {/* gallery-row 1 */}
      <div className="gallery-row gallery-row1">
        <div className="header-container">
          <h1>Check Out Our Gallery</h1>
          <p>Explore our gallery-collection of images showcasing our work and events.</p>
        </div>
        <div className="image-container">
          <img src={Image1} alt="Gallery" width="350" />
        </div>
      </div>

      {/* gallery-row 2 */}
      <div className="gallery-row">
        <div className="grid-container">
          <div className="gallery-col empty"></div>
          <div className="gallery-col single-image">
            <div className="image-container-bottom">
              <div className="top-empty" /> {/* Empty div for spacing */}
              <img src={Image2} alt="Gallery"/>
            </div>
          </div>
          <div className="gallery-col">
            <img src={Image3} alt="Gallery" />
          </div>
          <div className="gallery-col double-image-container">
            <img src={Image4} alt="Gallery" />
            <img src={Image5} alt="Gallery" />
          </div>
        </div>
      </div>

      {/* gallery-row 3 */}
      <div className="gallery-row">
        <div className="grid-container">
          <div className="gallery-col">
            <img src={Image1} alt="Gallery" />
          </div>
          <div className="gallery-col">
            <img src={Image2} alt="Gallery" />
          </div>
          <div className="gallery-col wide">
            <img src={Image4} alt="Gallery" />
          </div>
        </div>
      </div>
        {/* View More Button */}
        <div className="view-more-btn">
            View More
        <span className="arrow">→</span>
        </div>
    </div>
  );
};

export default OurGallery;
