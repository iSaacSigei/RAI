import React, { useState } from 'react';

const Events = () => {
  const [search, setSearch] = useState('');
  const [topics] = useState(['Design Thinking', 'Technology', 'Web3', 'Programming', 'AI']);
  const [events] = useState([
    { id: 1, title: 'Monthly Events With LEA Foundation', date: 'Mar 1, 1200 Hours', speaker: 'Mark Tuchel', type: 'Virtual' },
    { id: 2, title: 'Annual Team Building Event', date: 'Jan 2, 1700 Hours', speaker: 'Harry Oland', type: 'Onsite' }
  ]);

  const handleSearch = (e) => setSearch(e.target.value);

  // Filter events based on search input for title, speaker, or date
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.speaker.toLowerCase().includes(search.toLowerCase()) ||
    event.date.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold">Upcoming Events</h1>
      <p className="text-gray-600">Powerful Trading Tools and Features for Experienced Investors</p>
      
      <div className="flex flex-col lg:flex-row mt-5 gap-5">
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/5">
          <h3 className="font-semibold">Events Topics</h3>
          <ul className="mb-5">
            {['Responsible AI', 'Team Building', 'Technology', 'Crypto', 'AI', 'Work'].map(topic => (
              <li key={topic} className="text-gray-700">{topic}</li>
            ))}
          </ul>
          <h3 className="font-semibold">Guide and Tools</h3>
          <ul>
            {['Guidelines', 'Mentorship', 'Tutorial', 'Training', 'Career', 'Self Care'].map(guide => (
              <li key={guide} className="text-gray-700">{guide}</li>
            ))}
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="w-full lg:w-4/5">
          <div className="flex flex-col lg:flex-row justify-between mb-5">
            <h2 className="text-xl font-semibold">Trending Events</h2>
            <input 
              type="text" 
              placeholder="Search by title, speaker, or date..." 
              value={search}
              onChange={handleSearch}
              className="p-2 border border-gray-300 rounded w-full lg:w-auto mt-2 lg:mt-0"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {topics.map(topic => (
              <button key={topic} className="px-3 py-1 border border-gray-300 rounded">{topic}</button>
            ))}
          </div>

          <div>
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div key={event.id} className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 p-5 bg-white rounded mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-600">{event.date} | Speaker: {event.speaker} | <span className={event.type === 'Virtual' ? 'text-purple-600' : 'text-blue-600'}>{event.type}</span></p>
                    <p className="text-gray-500">I'm always trying to think of new and interesting business ideas...</p>
                    <button className="mt-2 px-3 py-1 border border-purple-600 text-purple-600 rounded">Book Now</button>
                  </div>
                  
                  {/* Right-side purple placeholder */}
                  <div className="flex-none w-60 h-40 bg-purple-800 rounded mt-3 lg:mt-0"></div>
                </div>
              ))
            ) : (
              <p className="text-red-600 italic">No events available for the search criteria.</p>
            )}
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-10 border-t border-gray-300 pt-5">
            <h2 className="text-xl font-semibold">Stay up to date</h2>
            <p className="text-gray-600">Join Our Newsletter</p>
            <form className="flex flex-col lg:flex-row items-start lg:items-center mt-3">
              <input type="email" placeholder="Enter your email..." className="p-2 border border-gray-300 rounded mb-3 lg:mb-0 lg:mr-2 w-full lg:w-auto" />
              <button type="submit" className="px-3 py-1 bg-purple-600 text-white rounded">Submit</button>
            </form>
            <p className="text-xs text-gray-500 mt-2">*You can unsubscribe anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
