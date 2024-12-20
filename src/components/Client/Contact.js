import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex">
        
        {/* Left Sidebar - Contact Information */}
        <div className="w-1/3 bg-purple-700 text-white p-8 rounded-l-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-8">Say something to start a live chat!</p>
            <div className="mb-4">
              <p className="font-semibold">📞 +1012 3456 789</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">📧 demo@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">📍 132 Dartmouth Street Boston,<br /> Massachusetts 02156 United States</p>
            </div>
          </div>
          <div className="flex space-x-3 mt-8">
            <a href="#" className="text-white hover:text-gray-200 text-2xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-200 text-2xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-200 text-2xl"><i className="fab fa-discord"></i></a>
          </div>
        </div>
        
        {/* Right Form */}
        <div className="w-2/3 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">Any question or remarks? Just write us a message!</p>
          
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2">First Name</label>
                <input type="text" placeholder="John" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" placeholder="email@example.com" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input type="tel" placeholder="+1 012 3456 789" className="w-full p-2 border border-red-300 rounded" />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Select Subject?</label>
              <div className="flex space-x-4 text-purple-600">
                <label>
                  <input type="radio" name="subject" value="General Inquiry" className="mr-2" />
                  General Inquiry
                </label>
                <label>
                  <input type="radio" name="subject" value="Support" className="mr-2" />
                  Support
                </label>
                <label>
                  <input type="radio" name="subject" value="Feedback" className="mr-2" />
                  Feedback
                </label>
                <label>
                  <input type="radio" name="subject" value="Other" className="mr-2" />
                  Other
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea placeholder="Write your message.." className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
            </div>
            
            <button type="submit" className="w-full p-3 bg-purple-700 text-white rounded font-semibold hover:bg-purple-800 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
