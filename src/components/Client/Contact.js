import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from '../SEO';

// Import React Icons
import { FaLinkedin, FaFacebook, FaInstagram, FaDiscord, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100 p-8 mt-[100px]"
      data-aos="fade-up"
    >
      <SEO
        title="Contact | RAI Alliance"
        description="Get in touch with RAI Alliance for courses, partnerships, and community initiatives in responsible AI."
        path="/contact"
        keywords="contact RAI Alliance, responsible AI contact"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
      />
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Left Sidebar - Contact Information */}
        <div className="md:w-1/3 w-full bg-[#800080] text-white p-8 rounded-t-lg md:rounded-t-none md:rounded-l-lg flex flex-col justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-8 text-sm sm:text-base">Say something to start a live chat!</p>

          <div className="mb-4 flex items-center">
            <FaPhoneAlt className="mr-2 text-base sm:text-lg" />
            <p className="font-semibold text-sm sm:text-base">+25417999616</p>
          </div>

          <div className="mb-4 flex items-center">
            <FaEnvelope className="mr-2 text-base sm:text-lg" />
            <p className="font-semibold text-sm sm:text-base">info@rai-alliance.org</p>
          </div>

          <div className="flex items-start">
            <FaMapMarkerAlt className="mr-2 text-base sm:text-lg mt-1" />
            <p className="font-semibold text-sm sm:text-base">
              View Park Towers,
              <br /> Utalii Street
            </p>
          </div>
        </div>

          <div className="flex justify-evenly space-x-4 mt-8 text-2xl">
            <a href="#" className="text-white hover:text-gray-200">
              <FaXTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FaDiscord />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FaLinkedin />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="md:w-2/3 w-full p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Any question or remarks? Just write us a message!
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 012 3456 789"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Select Subject?</label>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-purple-600">
                <label>
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    className="mr-2"
                  />
                  General Inquiry
                </label>
                <label>
                  <input
                    type="radio"
                    name="subject"
                    value="Support"
                    className="mr-2"
                  />
                  Support
                </label>
                <label>
                  <input
                    type="radio"
                    name="subject"
                    value="Feedback"
                    className="mr-2"
                  />
                  Feedback
                </label>
                <label>
                  <input
                    type="radio"
                    name="subject"
                    value="Other"
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Write your message.."
                className="w-full p-2 border border-gray-300 rounded h-24"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#800080] text-white rounded font-semibold hover:bg-[#330033] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
