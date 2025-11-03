import React, { useState, useEffect } from "react";
import "../../styles/Gallery.css"; // Custom CSS for this page
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from '../../images/RAI TEAM/IMG_1544.JPG';
import img2 from '../../images/RAI TEAM/IMG_1545.JPG';
import img3 from '../../images/RAI TEAM/IMG_1547.JPG';
import img4 from '../../images/RAI TEAM/IMG_1549.JPG';
import img5 from '../../images/RAI TEAM/IMG_1550.JPG';
import img6 from '../../images/RAI TEAM/IMG_1551.JPG';
import img7 from '../../images/RAI TEAM/IMG_1552.JPG';
import img8 from '../../images/RAI TEAM/IMG_1553.JPG';
import img9 from '../../images/RAI TEAM/IMG_1554.JPG';
import img10 from '../../images/RAI TEAM/IMG_1556.JPG';
import img11 from '../../images/RAI TEAM/IMG_1557.JPG';
// import SEO from "../SEOMetaTags";
const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to track the selected photo

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    const timer = setTimeout(() => {
      setPhotos([
        { id: 1, date: "2024-12-19", event: "RAI Team Events", src: img1, height: 200 },
        { id: 2, date: "2024-12-19", event: "RAI Team Events", src: img2, height: 300 },
        { id: 3, date: "2024-12-10", event: "Team Activities", src: img3, height: 250 },
        { id: 4, date: "2024-12-10", event: "Team Activities", src: img4, height: 250 },
        { id: 5, date: "2024-12-10", event: "Team Activities", src: img5, height: 250 },
        { id: 6, date: "2024-12-10", event: "Team Activities", src: img6, height: 150 },
        { id: 7, date: "2024-11-22", event: "RAI Workshops", src: img7, height: 350 },
        { id: 8, date: "2024-11-22", event: "RAI Workshops", src: img8, height: 350 },
        { id: 9, date: "2024-11-10", event: "Team Meetups", src: img9, height: 220 },
        { id: 10, date: "2024-11-10", event: "Team Meetups", src: img10, height: 270 },
        { id: 11, date: "2024-11-10", event: "Team Meetups", src: img11, height: 270 },
      ]);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handler for opening the modal
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <main className="gallery-page">
      {/* <SEO
        title="Gallery | RAI Alliance"
        description="Highlights from RAI Alliance events, workshops, and community programs."
        path="/gallery"
        keywords="RAI gallery, responsible AI events gallery"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }]}
      /> */}
      {isLoading ? (
        <div className="preloader">
          <div className="spinner"></div>
          <p>Loading Photos...</p>
        </div>
      ) : (
        <div className="gallery-container">
          {photos.length > 0 &&
            Array.from(new Set(photos.map(photo => photo.event))).map(event => (
              <div key={event} className="gallery-section">
                <div className="gallery-header">
                  <h3 className="event-name">{event}</h3>
                  <span className="event-date">
                    {new Date(
                      photos.find(photo => photo.event === event).date
                    ).toLocaleDateString()}
                  </span>
                </div>
                <div className="masonry-grid">
                  {photos
                    .filter(photo => photo.event === event)
                    .map(photo => (
                      <div
                        key={photo.id}
                        className="masonry-item"
                        style={{ height: `${photo.height}px` }}
                        onClick={() => handlePhotoClick(photo)} // Open modal on click
                      >
                        <img src={photo.src} alt={photo.event} />
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Modal */}
      {selectedPhoto && (
        <div className="photo-modal" onClick={handleCloseModal}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.event} />
            <button className="close-modal" onClick={handleCloseModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
