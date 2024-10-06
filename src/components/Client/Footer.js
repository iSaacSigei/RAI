import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      {/* Center the h2 and increase the font size */}
      <div className="mb-8 mt-16 text-center">
        <h2 className="text-4xl font-bold">Leading the Way in AI Ethics and Responsibility</h2>
        <div className="mt-4">
          <button className="px-4 py-2 bg-white text-blue-900 mr-2 hover:bg-gray-100">RECEIVE NEWS</button>
          <button className="px-4 py-2 bg-white text-blue-900 hover:bg-gray-100">DONATE</button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8 text-left">
        <div>
          <h3 className="font-bold mb-4">NAVIGATION</h3>
          <ul>
            <li><a href="#" className="no-underline hover:underline">Home</a></li>
            <li><a href="#" className="no-underline hover:underline">About Us</a></li>
            <li><a href="#" className="no-underline hover:underline">What We Do</a></li>
            <li><a href="#" className="no-underline hover:underline">To The Power of 10</a></li>
            <li><a href="#" className="no-underline hover:underline">Donate</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">WHAT WE DO</h3>
          <ul>
            <li><a href="#" className="no-underline hover:underline">Encouraging Testing</a></li>
            <li><a href="#" className="no-underline hover:underline">Strengthening Advocacy</a></li>
            <li><a href="#" className="no-underline hover:underline">Sharing Information</a></li>
            <li><a href="#" className="no-underline hover:underline">Building Leadership</a></li>
            <li><a href="#" className="no-underline hover:underline">Engaging With Global Fun</a></li>
            <li><a href="#" className="no-underline hover:underline">Shining a Light</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">LEGAL</h3>
          <ul>
            <li><a href="#" className="no-underline hover:underline">General Info</a></li>
            <li><a href="#" className="no-underline hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="no-underline hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">TALK TO US</h3>
          <ul>
            <li><a href="mailto:support@etrom.com" className="no-underline hover:underline">info@raifaalliance.org</a></li>
            <li><a href="tel:+6623991345" className="no-underline hover:underline">+254 717 999 616</a></li>
            <li><a href="#" className="no-underline hover:underline">Contact Us</a></li>
            <li><a href="#" className="no-underline hover:underline">Facebook</a></li>
            <li><a href="#" className="no-underline hover:underline">LinkedIn</a></li>
            <li><a href="#" className="no-underline hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Center the paragraph and move icons to the right */}
      <div className="text-center">
        <p>&copy; 2024 Lift Media. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
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
