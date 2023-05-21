import React, { useState, useEffect, useRef } from 'react';
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
  const [showMore, setShowMore] = useState(false);


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
    setIsConnectOpen(false);
  };
  const handleConfirmClick = () => {
    setIsPopupOpen(false);
    setIsConnectOpen(false);
    setIsLoading(true);

    const intervalId = setInterval(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearInterval(intervalId);
  };

  const { minutes, seconds } = time;
  return (
    <div className="container">
      <NavBar setIsConnectOpen={setIsConnectOpen} />
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
          <ul className='dropDown'>
            <li><img src='/react-haystack/logos/MetaMask_Fox.svg' alt='MetaMask' /><span className='WalletName'>MetaMask</span><span className='WalletDesc'>POPULAR</span></li>
            <li><img src='/react-haystack/logos/coinbase-logo.svg' alt='coinbase-logo' />Coinbase Wallet</li>
            <li><img src='/react-haystack/logos/wallet-connect-logo.svg' alt='wallet-connect-logo' />WalletConnect</li>
            <li><img src='/react-haystack/logos/ledger-logo.svg' alt='ledger-logo' />Ledger</li>
            <li><img src='/react-haystack/logos/phantom-icon-purple.svg' alt='phantom-icon-purple' />Phantom</li>
            <li><img src='/react-haystack/logos/bitkeep-wallet.jpg' alt='bitkeep-wallet' />BitKeep</li>
            {showMore && (
              <li><img src='/react-haystack/logos/CoreWallet.svg' alt='CoreWallet' />Core</li>
            )}
          </ul>
          <button className="confirm-btn" onClick={() => setShowMore(!showMore)}>{!showMore ? 'Show more' : 'Show less'}</button>
        </div>
      </Popup>
      <Popup isOpen={isLoading} isloading={isLoading}>
        {/* <img src="/react-haystack/img/reveal-loading.gif" alt="Ticket" className="Loading" /> */}
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </Popup>
    </div>
  );
}

export default App;
