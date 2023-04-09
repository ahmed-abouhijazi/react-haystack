import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
  // const [showConnectBlock, setShowConnectBlock] = useState(false);
  // const [selectedNetwork, setSelectedNetwork] = useState('');

  // const handleNetworkChange = (event) => {
  //   setSelectedNetwork(event.target.value);
  // };

  useEffect(() => {
    const handleClick = (e) => {
      const connectBlock = document.querySelector('.connect-block');
      const connectButton = document.querySelector('.right-button');
      if (connectBlock && !connectBlock.contains(e.target) && !connectButton.contains(e.target)) {
        // setShowConnectBlock(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // TODO: handle submission of selected network
  // };
  return (
    <nav>
      <img src="/react-haystack/img/Website_logo.png" alt="Logo" />
      <ul>
        <li className="element" ><a href="https://ahmed-abouhijazi.github.io/react-haystack">Home</a></li>
        <li className="element" ><a href="https://ahmed-abouhijazi.github.io/react-haystack">About</a></li>
        <li className="element" ><a href="https://ahmed-abouhijazi.github.io/react-haystack">Contact</a></li>
        <li className="connect">
          <div className='button-container'>
            <button className="left-button" onClick={() => props.setIsConnectOpen(true)}><img src='/react-haystack/img/icons8-wallet-full-of-cash-isolated-on-a-white-background-24.png' alt='User logo' /> Connect Wallet</button>
            <button className="right-button hover-button" ><img src='/react-haystack/img/icons8-user-48.png' alt='User logo' /></button>
            <div className="hovered-options">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </div>
            {/* {showConnectBlock && (
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
          )} */}

          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
