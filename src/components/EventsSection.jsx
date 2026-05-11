import React from 'react';
import EventCard from './EventCard';
import './EventsSection.css';

const EventsSection = () => {
  const events = [
    {
      name: 'City Walk Concert',
      location: 'Jeddah Waterfront',
      date: 'May 15, 2026',
      category: 'Music',
      color: '#1f6593'
    },
    {
      name: 'Jeddah Gaming Zone',
      location: 'City Walk Area',
      date: 'May 18, 2026',
      category: 'Gaming',
      color: '#5eb090'
    },
    {
      name: 'Beach Festival',
      location: 'Obhur Beach',
      date: 'May 20, 2026',
      category: 'Leisure',
      color: '#9ece47'
    },
    {
      name: 'Formula Race Experience',
      location: 'Corniche Circuit',
      date: 'May 22, 2026',
      category: 'Sports',
      color: '#eab2bb'
    }
  ];

  return (
    <section className="events-section">
      <div className="section-header">
        <h2>Upcoming Events</h2>
        <button className="view-all">View All</button>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
