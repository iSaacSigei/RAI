import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/About.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Background from '../../images/BG1.png';
import Image1 from '../../images/BG1.png';
import Image2 from '../../images/BG1.png';
import Instructor1 from '../../images/Instructor.png';
import Instructor2 from '../../images/Instructor.png';
import Instructor3 from '../../images/Instructor.png';
import { GiSwirlString } from "react-icons/gi";
import { MdAbc } from "react-icons/md";

function About() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Instructor 1 in the center
  const instructors = [
    { img: Instructor1, name: 'Instructor Name 1' },
    { img: Instructor2, name: 'Instructor Name 2' },
    { img: Instructor3, name: 'Instructor Name 3' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + instructors.length) % instructors.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

 useEffect(() => {
    const handleScroll = () => {
      const rows = document.querySelectorAll('.about-row');
      rows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          row.classList.add('in-view');
        } else {
          row.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="about" data-aos="fade-up">
      {/* Background Image */}
      <img src={Background} alt="Background" className="responsive-bg-image" loading="lazy" />
      
      {/* Section 1: Background with Centered Content */}
      <section className="about-intro">
        <h1>About Us</h1>
        <p>Our vision is a world where AI is developed and used responsibly to benefit all of humanity. We believe that AI has the potential to transform society for the better, but only if it is developed and used ethically. By advocating for responsible AI, we aim to ensure that AI is used to promote human rights, equality, and justice.

</p>
        <button className="learn-more">Learn More</button>
      </section>
      
      {/* Section 2: Preparing Students and Kids */}
      <div className="about-prep">
        <div className='about-main'>
        <h2>Preparing Students and Kids for Responsible AI Usage</h2>
        <div className="about-rows">
          <div className="about-row">
            <div className="image-column">
              <div className="image-wrapper">
              <GiSwirlString className="icon-overlay" color="white" size={60} />
              <img src={Image1} alt="Description 1" />
              <MdAbc color="white" size={30} />
              </div>
            </div>
            <div className="text-column">
              <h3 className="description-header">AI Fundamentals for Students</h3>
              <p>
                This course helps students and kids understand the fundamentals of artificial intelligence, emphasizing responsible usage and ethical considerations. Through interactive lessons, participants gain essential insights into the impacts and potential of AI, preparing them to navigate the future responsibly....
              </p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>

          
          <div className="about-row">
            <div className="text-column">
              <h3 className="description-header">Introducing AI to Young Learners</h3>
              <p>
                Introducing young learners to the world of AI, this program encourages critical thinking, creativity, and awareness of technology's role in society. Participants explore real-world applications, empowering them with knowledge about safe AI practices and skills that will be vital in a digital future....
              </p>
              <button className="learn-more">Learn More</button>
            </div>
            <div className="image-column">
              <div className="image-wrapper">
              <GiSwirlString className="icon-overlay" color="white" size={60} />
              <img src={Image2} alt="Description 2" />
              <MdAbc color="white" size={60} />
              </div>
            </div>
          </div>
          {/* Additional rows can follow this pattern */}
        </div>
        </div>
      </div>

      {/* Section 3: Our Instructors */}
      <section className="instructors">
        <h2>Our Instructors</h2>
        <div className="carousel-container">
          <FaChevronLeft className="carousel-control left" onClick={handlePrev} />
          <div className="instructor-list">
            {instructors.map((instructor, index) => {
              const position = (index - currentIndex + instructors.length) % instructors.length;
              return (
                <div
                  key={index}
                  className={`instructor ${position === 0 ? 'center' : position === 1 ? 'right' : 'left'}`}
                >
                  <img src={instructor.img} alt={instructor.name} />
                  <p className='outside-circle'>{instructor.name}</p>
                </div>
              );
            })}
          </div>
          <FaChevronRight className="carousel-control right" onClick={handleNext} />
        </div>
      </section>
    </div>
  );
}

export default About;
