import React, { useState, useEffect } from 'react';
import '../../../styles/firstPage.css'; // Import styles
import BG1 from '../../../images/BG1.png'; 
import BG2 from '../../../images/BG2.jpeg';
import BG3 from './../../../images/BG3.jpeg'; 
import { motion, AnimatePresence } from 'framer-motion';
import { ReactTyped } from 'react-typed'; // Use named import
const TypingText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
      if (index < text.length) {
          const timeoutId = setTimeout(() => {
              setDisplayedText(text.substring(0, index + 1));
              setIndex(index + 1);
          }, 30); // Typing speed
          return () => clearTimeout(timeoutId);
      } else {
          onComplete(); // Notify parent component when typing completes
      }
  }, [index, text, onComplete]);

  return <p>{displayedText}</p>;
};

const messages = [
  {
    title: "Building a Responsible AI Future",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: BG1
  },
  {
    title: "Innovation through Technology",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
    backgroundImage: BG2
  },
  {
    title: "Empowering Communities",
    text: "Quisque ut nisi quis dolor tempus aliquet eget quis metus.",
    backgroundImage: BG3
  }
];

const FirstPage = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 6000); // Change messages every 6 seconds

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
        <div className="cards-section">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className="cards"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
              >
                <h3>Card {index + 1}</h3>
                <p>{message.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
