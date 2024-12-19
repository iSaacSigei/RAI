import React, { useState, useEffect } from "react";
import "../../styles/Gallery.css"; // Custom CSS for this page
import AOS from "aos";
import "aos/dist/aos.css";
import image from '../../images/a1b7e5_7e8bcb716d834bb596b645a1a943db3e~mv2.webp';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to track the selected photo

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    const timer = setTimeout(() => {
      setPhotos([
        { id: 1, date: "2024-12-19", event: "AI Workshop", src: image, height: 200 },
        { id: 2, date: "2024-12-19", event: "AI Workshop", src: image, height: 300 },
        { id: 3, date: "2024-12-10", event: "Hackathon", src: image, height: 250 },
        { id: 8, date: "2024-12-10", event: "Hackathon", src: image, height: 250 },
        { id: 9, date: "2024-12-10", event: "Hackathon", src: image, height: 250 },
        { id: 4, date: "2024-12-10", event: "Hackathon", src: image, height: 150 },
        { id: 5, date: "2024-11-22", event: "Tech Conference", src: image, height: 350 },
        { id: 10, date: "2024-11-22", event: "Tech Conference", src: image, height: 350 },
        { id: 6, date: "2024-11-10", event: "Team Meetup", src: image, height: 220 },
        { id: 7, date: "2024-11-10", event: "Team Meetup", src: image, height: 270 },
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
