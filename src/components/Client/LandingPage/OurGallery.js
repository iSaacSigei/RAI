import React from 'react';
import '../../../styles/OurGallery.css'; // Your custom CSS
import Image1 from '../../../images/RAI TEAM/IMG_1558.JPG';
import Image2 from '../../../images/RAI TEAM/IMG_1560.JPG';
import Image3 from '../../../images/RAI TEAM/IMG_1561.JPG';
import Image4 from '../../../images/RAI TEAM/IMG_1562.JPG';
import Image5 from '../../../images/RAI TEAM/IMG_1556.JPG';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const OurGallery = () => {
  return (
    <div className="gallery-container">
      {/* gallery-row 1 */}
      <div className="gallery-row gallery-row1">
        <div className="header-container">
          <h1>Check Out Our Gallery</h1>
          <p>Explore our gallery-collection of images showcasing our work and events.</p>
        </div>
        <div className="image-container" style={{ backgroundImage: `url(${Image1})` }}>
          {/* Background image is now set with inline style */}
        </div>
      </div>

      {/* gallery-row 2 */}
      <div className="gallery-row">
        <div className="grid-container">
          <div className="gallery-col empty"></div>
          <div className="gallery-col single-image">
            <div className="image-container-bottom" style={{ backgroundImage: `url(${Image2})` }}>
              <div className="top-empty" /> {/* Empty div for spacing */}
            </div>
          </div>
          <div className="gallery-col" style={{ backgroundImage: `url(${Image3})` }}></div>
          <div className="gallery-col double-image-container">
            <div style={{ backgroundImage: `url(${Image4})` }} className="image-item"></div>
            <div style={{ backgroundImage: `url(${Image5})` }} className="image-item"></div>
          </div>
        </div>
      </div>

      {/* gallery-row 3 */}
      <div className="gallery-row">
        <div className="grid-container">
          <div className="gallery-col" style={{ backgroundImage: `url(${Image1})` }}></div>
          <div className="gallery-col" style={{ backgroundImage: `url(${Image2})` }}></div>
          <div className="gallery-col wide" style={{ backgroundImage: `url(${Image4})` }}></div>
        </div>
      </div>
      
      {/* View More Button */}
      <Link to="/gallery" className="view-more-btn">
        View More
        <span className="arrow">→</span>
      </Link>
    </div>
  );
};

export default OurGallery;
