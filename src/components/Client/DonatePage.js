import React, {useState, useEffect} from "react";
import "../../styles/DonatePage.css"; // Custom CSS for this page
import Modal from "react-modal";
import image from "../../images/Donate.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEO from '../SEO';
const DonatePage = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        });
      }, []);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handlePayPalClick = () => {
    window.open("https://www.paypal.com", "_blank");
  };
  console.log("Modal is open:", modalIsOpen);

  return (
    <main className="donate-page" data-aos="fade-up">
      <SEO
        title="Donate | RAI Alliance"
        description="Support RAI Alliance’s mission to advance responsible AI through education and community programs."
        path="/donate"
        keywords="donate responsible AI, support RAI Alliance"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Donate', path: '/donate' }]}
      />
      <div className="donate-container">
        {/* Content Section */}
        <div className="donate-content">
          {/* Decorative Circles */}
          <div className="circle circle-left"></div>
          <div className="circle circle-right"></div>

          {/* Left Column */}
          <div className="donate-text">
            <h1 className="donate-header">Donate for a Great Cause</h1>
            <p className="donate-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </p>
            <button className="donate-button" onClick={openModal}>Donate Now</button>
            <div className="donate-raised">
              <span>Raised so far:</span>
              <strong>$28,579</strong>
            </div>
          </div>

          {/* Right Column */}
          <div className="donate-image">
            <img
              src={image} // Replace with the actual image path
              alt="Donation Cause"
            />
          </div>
        </div>
      </div>
       {/* Modal */}
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Choose Payment Option"
        className="modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
        >
        <div className="modal-content">
            <h2>Choose Payment Option</h2>
            <div className="payment-options">
            <button className="payment-button" onClick={handlePayPalClick}>
                PayPal
            </button>
            <button className="payment-button">Lipa na Mpesa</button>
            <button className="payment-button">Visa</button>
            <button className="payment-button">Apple Pay</button>
            </div>
            <button className="close-modal" onClick={closeModal}>
            Close
            </button>
        </div>
        </Modal>

    </main>
  );
};

export default DonatePage;

