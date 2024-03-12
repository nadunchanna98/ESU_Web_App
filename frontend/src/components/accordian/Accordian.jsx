import React, { useState, useEffect } from "react";
import './Accordian.css';
import UpcomingEventCard from '../upcommingEvents/upcommingEventCard/UpcomingEventCard.jsx';

function BasicExample() {
  const [activeIndex, setActiveIndex] = useState(0); // Set initial state to 0 for Inter University Events

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    setActiveIndex(0); // Set activeIndex to 0 when component mounts (initial state)
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <div className="accordion">
      <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => handleClick(0)}>
          Inter University Events
          <div className={`arrow ${activeIndex === 0 ? 'rotate' : ''}`}></div>
        </div>
        <div className="accordion-body">
          <div className="image-card">
              <UpcomingEventCard/>
          </div>
        </div>
      </div>

      <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => handleClick(1)}>
          Inter Faculty Events
          <div className={`arrow ${activeIndex === 1 ? 'rotate' : ''}`}></div>
        </div>
        <div className="accordion-body">
          <div className="image-card">
              <UpcomingEventCard/>
          </div>
        </div>
      </div>

      <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => handleClick(2)}>
          Religious Events
          <div className={`arrow ${activeIndex === 2 ? 'rotate' : ''}`}></div>
        </div>
        <div className="accordion-body">
          <div className="image-card">
              <UpcomingEventCard/>
          </div>
        </div>
      </div>

      <div className={`accordion-item ${activeIndex === 3 ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => handleClick(3)}>
          Premises Events
          <div className={`arrow ${activeIndex === 3 ? 'rotate' : ''}`}></div>
        </div>
        <div className="accordion-body">
          <div className="image-card">
              <UpcomingEventCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
