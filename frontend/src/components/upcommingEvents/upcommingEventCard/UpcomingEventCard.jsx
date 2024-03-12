import React, { useState, useEffect } from 'react';
import './eventCard.css'; 
import image1 from '../../../images/upcevent1.jpg'; 
import image2 from '../../../images/upcevent2.jpeg';
import image3 from '../../../images/upcevent3.jpg';

const UpcomingEventCard = ({ title, image, description }) => {
  return (
    
    <div className="event-card">
      <img src={image} alt={title} className="event-card-image" />
      <div className="event-card-content">
        <h3>{title}</h3> 
        <p>{description}</p>
      </div>

    </div>
  );
};

const initialEvents = [
  {
    title: 'Inter Faculty Chess Champions',
    image: image1, 
    description: 'Learn the basics of building interactive user interfaces with React.lorem lorem lorem lorem',
  },
  {
    title: 'E-Week Quiz Feasta',
    image: image2,
    description: 'Network with industry professionals and learn.building interactive user interfaces with ReactLearn the basics of building ',
  },
  {
    title: 'Naadaswara',
    image: image3,
    description: 'Join a team and compete to build the next big thing.Learn the basics of building interactive user',
  },
];

function EventCards() {
  // Using useState to manage the events array and setEvents function to update it
  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {
    // Define a function to shuffle the events array
    const shuffleEvents = () => {
      // Create a copy of the events array
      const shuffledEvents = [...events];
      // Implementing Fisher-Yates shuffle algorithm
      for (let i = shuffledEvents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledEvents[i], shuffledEvents[j]] = [shuffledEvents[j], shuffledEvents[i]];
      }
      // Set the shuffled events array
      setEvents(shuffledEvents);
    };

    // Set an interval to shuffle events every 5 seconds
    const intervalId = setInterval(shuffleEvents, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [events]); // Depend on events to re-run effect when it changes

  return (
    <div className="event-card-container">
      {/* Map over the events array to render event cards */}
      
      {events.map((event, index) => (
        <UpcomingEventCard key={index} {...event} />
      ))}
    </div>
  );
}

export default EventCards;




