import React from 'react';
import Logo from '../../images/Logo.png'; // Ensure the correct path
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaTiktok,FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B3A75] text-white py-16 px-16">
      {/* Title Section */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Leading the Way in AI Ethics and <br /> Responsibility</h2>
        <div className="flex justify-center space-x-6">
          <button className="px-8 py-3 bg-[#173780] text-white font-light rounded-md border border-gray-400">
            RECEIVE NEWS
          </button>
          <button className="px-8 py-3 bg-white text-black font-light rounded-md border border-gray-400">
            DONATE
          </button>
        </div>
      </div>

      {/* Footer Links - Four Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-16 text-white">
        {/* Navigation Section */}
        <div>
          <h3 className="font-semibold mb-3 uppercase tracking-wide text-white">Navigation</h3>
          <ul className="space-y-3 text-white">
            <li><a href="/" className="hover:underline text-white">Home</a></li>
            <li><a href="/about" className="hover:underline text-white">About Us</a></li>
            <li><a href="/what-we-do" className="hover:underline text-white">What We Do</a></li>
            <li><a href="/power-of-10" className="hover:underline text-white">To The Power of 10</a></li>
            <li><a href="/donate" className="hover:underline text-white">Donate</a></li>
          </ul>
        </div>

        {/* What We Do Section */}
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide text-white">What We Do</h3>
          <ul className="space-y-3 text-white">
            <li><a href="/encouraging-testing" className="hover:underline text-white">Encouraging Testing</a></li>
            <li><a href="/strengthening-advocacy" className="hover:underline text-white">Strengthening Advocacy</a></li>
            <li><a href="/sharing-information" className="hover:underline text-white">Sharing Information</a></li>
            <li><a href="/building-leadership" className="hover:underline text-white">Building Leadership</a></li>
            <li><a href="/engaging-global-fun" className="hover:underline text-white">Engaging With Global Fun</a></li>
            <li><a href="/shining-a-light" className="hover:underline text-white">Shining a Light</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide text-white">Legal</h3>
          <ul className="space-y-3 text-white">
            <li><a href="/general-info" className="hover:underline text-white">General Info</a></li>
            <li><a href="/privacy-policy" className="hover:underline text-white">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:underline text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Talk to Us Section */}
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide text-white">Talk to Us</h3>
          <ul className="text-white">
            <li><a href="mailto:info@raifaalliance.org" className="no-underline hover:underline text-white">info@raifaalliance.org</a></li>
            <li><a href="tel:+254717999616" className="no-underline hover:underline text-white">+254 717 999 616</a></li>
            <li><a href="/contact-us" className="no-underline hover:underline text-white">Contact Us</a></li>
            <li><a href="https://facebook.com" className="no-underline hover:underline text-white">Facebook</a></li>
            <li><a href="https://linkedin.com" className="no-underline hover:underline text-white">LinkedIn</a></li>
            <li><a href="https://twitter.com" className="no-underline hover:underline text-white">Twitter</a></li>
            <li><a href="https://www.tiktok.com/@raialliance" className="no-underline hover:underline text-white">TikTok</a></li>
            <li><a href="https://www.youtube.com/@RAIALLIANCE" className="no-underline hover:underline text-white">YouTube</a></li> {}
          </ul>
        </div>
      </div>

      {/* Create a layout with left-aligned logo, centered copyright text, and right-aligned social icons */}
      <div className="flex items-center justify-between mt-4 border-t border-gray-600 pt-4">
        {/* Logo - Left aligned */}
        <div className="ml-4">
          <img src={Logo} alt="LogoImage" className="w-20 h-auto" />
        </div>

        {/* Centered Copyright Text */}
        <p className="flex-grow text-center text-white">&copy; 2024 Lift Media. All Rights Reserved.</p>

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
          <a href="https://www.youtube.com/@RAIALLIANCE" aria-label="YouTube" className="text-white hover:text-gray-400">
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
