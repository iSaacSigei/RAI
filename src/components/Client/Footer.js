import React from 'react';
import Logo from '../../images/Logo.png'; // Ensure the correct path
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B3A75] text-white py-16 px-16">
      {/* Title Section */}
      <div className="text-center mb-14">
         <h2 className="text-4xl font-bold">Leading the Way in AI Ethics and <br></br> Responsibility</h2>
        <div className="flex justify-center space-x-6">
          <button className="px-8 py-3 bg-gray text-white font-light rounded-md border border-gray-400">
                RECEIVE NEWS
          </button>
          <button className="px-8 py-3 bg-white text-[black] font-light rounded-md border border-gray -400">
                DONATE
          </button>

        </div>
      </div>

      {/* Footer Links - Four Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-16">
        {/* Navigation Section */}
        <div>
          <h3 className="font-semibold mb-3 uppercase tracking-wide">Navigation</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">What We Do</a></li>
            <li><a href="#" className="hover:underline">To The Power of 10</a></li>
            <li><a href="#" className="hover:underline">Donate</a></li>
          </ul>
        </div>

        {/* What We Do Section */}
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">What We Do</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Encouraging Testing</a></li>
            <li><a href="#" className="hover:underline">Strengthening Advocacy</a></li>
            <li><a href="#" className="hover:underline">Sharing Information</a></li>
            <li><a href="#" className="hover:underline">Building Leadership</a></li>
            <li><a href="#" className="hover:underline">Engaging With Global Fun</a></li>
            <li><a href="#" className="hover:underline">Shining a Light</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">Legal</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">General Info</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Talk to Us Section */}
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">Talk to Us</h3>
          <ul>
            <li><a href="mailto:support@etrom.com" className="no-underline hover:underline">info@raifaalliance.org</a></li>
            <li><a href="tel:+6623991345" className="no-underline hover:underline">+254 717 999 616</a></li>
            <li><a href="#" className="no-underline hover:underline">Contact Us</a></li>
            <li><a href="#" className="no-underline hover:underline">Facebook</a></li>
            <li><a href="#" className="no-underline hover:underline">LinkedIn</a></li>
            <li><a href="#" className="no-underline hover:underline">Twitter</a></li>
            <li><a href="https://www.tiktok.com/@raialliance" className="no-underline hover:underline">Tiktok</a></li>
          </ul>
        </div>
      </div>

      {/* Create a layout with left-aligned logo, centered copyright text, and right-aligned social icons */}
<div className="flex items-center justify-between mt-4">
  {/* Logo - Left aligned */}
  <div className="ml-4">
    <img src={Logo} alt="LogoImage" className="w-20 h-auto" />
  </div>

  {/* Centered Copyright Text */}
  <p className="flex-grow text-center">&copy; 2024 Lift Media. All Rights Reserved.</p>

  {/* Social Icons - Right aligned */}
  <div className="flex space-x-4 mr-4">
    <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-gray-400">
      <FaFacebookF className="w-5 h-5" />
    </a>
    <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-gray-400">
      <FaLinkedinIn className="w-5 h-5" />
    </a>
    <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-gray-400">
      <FaTwitter className="w-5 h-5" />
    </a>
    <a href="https://www.tiktok.com/@raialliance" aria-label="TikTok" className="text-white hover:text-gray-400">
      <FaTiktok className="w-5 h-5" />
    </a>
  </div>
</div>

      
      
    </footer>
  );
};

export default Footer;
