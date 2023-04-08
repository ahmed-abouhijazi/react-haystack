import React, { useState,useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [showConnectBlock, setShowConnectBlock] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('');

  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
  };

  useEffect(() => {
    const handleClick = (e) => {
      const connectBlock = document.querySelector('.connect-block');
      const connectButton = document.querySelector('.connect-button');
      if (connectBlock && !connectBlock.contains(e.target) && !connectButton.contains(e.target)) {
        setShowConnectBlock(false);
      }
    };
  
    document.addEventListener('click', handleClick);
  
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle submission of selected network
  };
  return (
    <nav>
      <img src="/react-haystack/img/Website_logo.png" alt="Logo" />
      <ul>
        <li className="element" ><a href="http://localhost:3000">Home</a></li>
        <li className="element" ><a href="http://localhost:3000">About</a></li>
        <li className="element" ><a href="http://localhost:3000">Contact</a></li>
        <li className="connect">
          <button className="connect-button" onClick={() => setShowConnectBlock(!showConnectBlock)}>Connect</button>
          {showConnectBlock && (
            <div className="connect-block">
              <form onSubmit={handleSubmit}>
                <label htmlFor="network-select">Select a network:</label>
                <select id="network-select" value={selectedNetwork} onChange={handleNetworkChange}>
                  <option value="">Choose a network</option>
                  <option value="Network 1">Network 1</option>
                  <option value="Network 2">Network 2</option>
                  <option value="Network 3">Network 3</option>
                </select>
                <button type="submit">Next</button>
              </form>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;