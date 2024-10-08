import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Client/Navbar';
import Home from './components/Client/Home';
import About from './components/Client/About';
import Services from './components/Client/Services';
import Resources from './components/Client/Resources';
import Events from './components/Client/Events';
import Team from './components/Client/Team';
import Blog from './components/Client/Blog';
import Contact from './components/Client/Contact';
import Footer from './components/Client/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Resources />} />
          <Route path="/community" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
