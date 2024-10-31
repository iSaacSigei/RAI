import React, { useState } from 'react';

const Events = () => {
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const topics = ['Design Thinking', 'Technology', 'Web3', 'Programming', 'AI'];
  const events = [
    { id: 1, title: 'Monthly Events With LEA Foundation', date: 'Mar 1, 1200 Hours', speaker: 'Mark Tuchel', type: 'Virtual', topic: 'Design Thinking' },
    { id: 2, title: 'Annual Team Building Event', date: 'Jan 2, 1700 Hours', speaker: 'Harry Oland', type: 'Onsite', topic: 'Team Building' },
    { id: 3, title: 'AI for Beginners Workshop', date: 'Apr 10, 1000 Hours', speaker: 'Alice Kim', type: 'Virtual', topic: 'AI' },
    { id: 4, title: 'Introduction to Web3', date: 'May 15, 1400 Hours', speaker: 'Ben Stark', type: 'Onsite', topic: 'Web3' },
    { id: 5, title: 'Programming Bootcamp', date: 'Jun 20, 0900 Hours', speaker: 'Carlos Diaz', type: 'Virtual', topic: 'Programming' },
    { id: 6, title: 'Advanced Technology Trends', date: 'Jul 22, 1300 Hours', speaker: 'Dana Smith', type: 'Onsite', topic: 'Technology' },
  ];

  const handleSearch = (e) => setSearch(e.target.value);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleClearFilter = () => setSelectedTopic('');

  // Filter events based on search input and selected topic
  const filteredEvents = events.filter(event =>
    (event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.speaker.toLowerCase().includes(search.toLowerCase()) ||
    event.date.toLowerCase().includes(search.toLowerCase())) &&
    (selectedTopic ? event.topic === selectedTopic : true)
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
              <button 
                key={topic} 
                onClick={() => handleTopicClick(topic)} 
                className={`px-3 py-1 border rounded ${selectedTopic === topic ? 'bg-purple-600 text-white' : 'border-gray-300'}`}
              >
                {topic}
              </button>
            ))}
            {selectedTopic && (
              <button 
                onClick={handleClearFilter} 
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                X
              </button>
            )}
          </div>

          <div>
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div key={event.id} className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 p-5 bg-white rounded mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-600">{event.date} | Speaker: {event.speaker} | <span className={event.type === 'Virtual' ? 'text-purple-600' : 'text-blue-600'}>{event.type}</span></p>
                    <p className="text-gray-500">I'm always trying to think of new and interesting business ideas...</p>
                    <button style={{ backgroundColor: '#800080' }} className="mt-2 px-3 py-1 text-white rounded">Book Now</button>
                  </div>
                  
                  {/* Right-side purple placeholder with white inner arc */}
                  <div className="relative flex-none w-60 h-40 rounded mt-3 lg:mt-0" style={{ backgroundColor: '#800080' }}>
                    <div className="absolute bottom-4 right-4 w-48 h-32 bg-white rounded-full" style={{ border: '8px solid #800080' }}></div>
                  </div>
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
              <button type="submit" className="px-3 py-1 text-white rounded" style={{ backgroundColor: '#800080' }}> Submit</button>
            </form>
            <p className="text-xs text-gray-500 mt-2">*You can unsubscribe anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
