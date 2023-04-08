import React, { useState, useEffect } from 'react';
import './PeekingPig.css';

function PeekingPig() {
  const [isPeeking, setIsPeeking] = useState(false);

  // Randomly set isPeeking to true or false every 5-10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsPeeking(Math.random() < 0.5);
    }, Math.random() * 5000 + 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`peeking-pig ${isPeeking ? 'peeking' : ''}`}>
      <img src="/react-haystack/img/Pig.gif" alt="Peeking Pig" />
    </div>
  );
}

export default PeekingPig;