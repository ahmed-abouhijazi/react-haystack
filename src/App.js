import React, { useState, useEffect,useRef } from 'react';
import './App.css';
import NavBar from './cmp/NavBar';
import Popup from './cmp/Popup';
import PeekingPig from './cmp/PeekingPig';
// import ImageFlow from './cmp/ImageFlow';

function App() {
  const [time, setTime] = useState({ minutes: 50, seconds: 0 });
  const intervalId = useRef(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


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
    intervalId.current = newIntervalId;

    return () => clearInterval(newIntervalId);
  }, [setTime, intervalId]);



  const handleRequestClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleConfirmClick = () => {
    setIsPopupOpen(false);
    setIsConnectOpen(false);
    setIsLoading(true);

    const intervalId = setInterval(() => {
      setIsLoading(false);
    },5000);
    return () => clearInterval(intervalId);
  };

  const { minutes, seconds } = time;
  return (
    <div className="container">
      <NavBar setIsConnectOpen={setIsConnectOpen}/>
      <PeekingPig />
      <div className="gif-container">
        <img src="/react-haystack/img/giphy.gif" alt="Your GIF" />
        <div className="timer">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>

      </div>
      <div className="btn-container">
        <button onClick={handleRequestClick}>Request</button>
        <button>Buy</button>
      </div>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <h2>Request Ticket</h2>
        <div className="popup-body">
          <img src="/react-haystack/img/GoldenTicket.png" alt="Ticket" className="ticket-image" /> <h2> x 1</h2>
          <button className="confirm-btn" onClick={handleConfirmClick}>Confirm</button>
        </div>
      </Popup>
      <Popup isOpen={isConnectOpen} onClose={handleClosePopup}>
        <h4>Connect your wallet</h4>
        <span className='Connect-details'>If you don't have a wallet, you can select a provider and create one now.</span>
        <div className="popup-body">
          <button className="confirm-btn" onClick={handleConfirmClick}>Confirm</button>
        </div>
      </Popup>
      <Popup isOpen={isLoading} isloading={isLoading}>
          <img src="/react-haystack/img/reveal-loading.gif" alt="Ticket" className="Loading" />
      </Popup>
    </div>
  );
}

export default App;
