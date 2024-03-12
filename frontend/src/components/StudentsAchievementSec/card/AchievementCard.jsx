import React, { useState } from 'react';
import './achievementCard.css';

const AchievementCard = () => {
  const [paragraphs] = useState([
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
  ]);
  const topics = [
    'Art and Design',
    'Science & Technology',
    'Sports and Fitness',
    'Music & Dance',
    'Art and Design',
    'Science & Technology',
    'Sports and Fitness',
    'Music & Dance',
    'Art and Design',
  ];

  // Ensure both topics and paragraphs have the same length
  const maxLength = Math.min(topics.length, paragraphs.length);

  // Function to chunk array into groups of size
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk topics and paragraphs into groups of three
  const chunkedTopics = chunkArray(topics.slice(0, maxLength), 3);

  return (
    <div className="achievement-card">
      {chunkedTopics.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((topic, colIndex) => (
            <div key={colIndex} className="col">
              <div className="custom__container card card">
                <div className="circle"></div>
                <div className="topic">{topic}</div>
                <div className="paragraph">{paragraphs[rowIndex * 3 + colIndex]}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AchievementCard;
