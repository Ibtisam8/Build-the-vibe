import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <div className="image-placeholder" style={{ backgroundColor: event.color }}>
          <span>{event.name[0]}</span>
        </div>
        <div className="event-tag">{event.category}</div>
      </div>
      <div className="event-info">
        <h3>{event.name}</h3>
        <p className="event-meta">{event.location} • {event.date}</p>
        <div className="event-actions">
          <button className="btn-secondary">Interested</button>
          <button className="btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
