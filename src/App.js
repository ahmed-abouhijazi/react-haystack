import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './cmp/NavBar';

function App() {
  const [time, setTime] = useState({ minutes: 50, seconds: 0 });
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const updateTimer = () => {
      setTime(prevTime => {
        const { minutes, seconds } = prevTime;
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          return prevTime;
        }
        if (seconds === 0) {
          return { minutes: minutes - 1, seconds: 59 };
        }
        return { minutes, seconds: seconds - 1 };
      });
    };
    const newIntervalId = setInterval(updateTimer, 1000);
    setIntervalId(newIntervalId);

    return () => clearInterval(newIntervalId);
  }, [intervalId]);

  const { minutes, seconds } = time;
  return (
    <div className="container">;
    
      <NavBar />
      <div class="gif-container">
    <img src="/react-haystack/img/giphy.gif" alt="Your GIF" />
    <div className="timer">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>

  </div>
      <div className="btn-container">
        <button>Request</button>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default App;
