import React, { useState, useEffect } from 'react';
import '../../styles/Navbar.css';
import Logo from '../../images/Logo.png'
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  // UseEffect to handle scrolling and mobile navigation behavior
  useEffect(() => {
    const toggleScrolled = () => {
      const body = document.querySelector('body');
      const header = document.querySelector('#header');
      if (!header.classList.contains('scroll-up-sticky') && !header.classList.contains('sticky-top') && !header.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
    };

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('#navmenu a');
    navLinks.forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          handleToggle();
        }
      });
    });

    const toggleDropdowns = document.querySelectorAll('.navmenu .toggle-dropdown');
    toggleDropdowns.forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach(navmenu => {
        navmenu.removeEventListener('click', handleToggle);
      });
      toggleDropdowns.forEach(navmenu => {
        navmenu.removeEventListener('click', handleToggle);
      });
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <img src={Logo} alt='LogoImage'/>
        </a>

        <nav id="navmenu" className={`navmenu ${isMobile ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#pricing">Events</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="/blog">Blog</a></li>
            <li className="dropdown">
              <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle bi bi-list" onClick={handleToggle}></i>
        </nav>

        <a className="btn-getstarted" href="#about">Get Started</a>
      </div>
    </header>
  );
};

export default Navbar;
