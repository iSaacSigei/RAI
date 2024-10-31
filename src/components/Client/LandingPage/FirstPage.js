import React, { useState, useEffect } from 'react';
import '../../../styles/firstPage.css';
import BG1 from '../../../images/BG1.png'; 
import BG2 from '../../../images/BG2.jpeg';
import BG3 from '../../../images/BG3.jpeg';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  {
    title: "Building a Responsible AI Future",
    text: "Join us in shaping a future where artificial intelligence is developed ethically, with a focus on transparency and societal well-being.",
    backgroundImage: BG1
  },
  {
    title: "Innovation through Technology",
    text: "Harness the power of cutting-edge technologies to drive transformative solutions that impact lives and inspire creativity.",
    backgroundImage: BG2
  },
  {
    title: "Empowering Communities",
    text: "Empowering communities with resources and knowledge to thrive in an increasingly digital world, fostering growth and opportunity.",
    backgroundImage: BG3
  }
];


const cardContents = [
  {
    title: "4 Online Courses",
    text: "Unlock your potential with our resources and start harnessing AI responsibly today."
  },
  {
    title: "Our Ambassadors",
    text: "Join our team of ambassadors driving Responsible AI initiatives."
  },
  {
    title: "Well-Curated Courses",
    text: "Be part of our community of Responsible AI learners."
  }
];

const FirstPage = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          className={`background`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.5, ease: "easeInOut" } }}
          style={{ backgroundImage: `url(${messages[currentMessage].backgroundImage})` }}
        />
      </AnimatePresence>

      <div className="content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            className="message-section"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>{messages[currentMessage].title}</h1>
            <p>{messages[currentMessage].text}</p>
            <button className="cta-button">Get Started</button>
          </motion.div>
        </AnimatePresence>

        {/* Card Section */}
        <div className="cards-section">
          <AnimatePresence>
            {cardContents.map((card, index) => (
              <motion.div
                key={index}
                className="cards"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
