import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClick = (e) => {
      const connectBlock = document.querySelector('.dropdown');
      const connectButton = document.querySelector('.right-button');
      if (connectBlock && !connectBlock.contains(e.target) && !connectButton.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <nav>
      <img src="/react-haystack/img/Website_logo.png" alt="Logo" />
      <ul >
        <li className="element" ><a href="https://ahmed-abouhijazi.github.io/react-haystack">Home</a></li>
        <li className="element" ><a href="https://ahmed-abouhijazi.github.io/react-haystack">About</a></li>
        <li className="element" ><a href="https://ahmed-abouhijazi.github.io/react-haystack">Contact</a></li>
        <li className="connect">
          <div className='button-container'>
            <button className="left-button" onClick={() => props.setIsConnectOpen(true)}><img src='/react-haystack/img/icons8-wallet-full-of-cash-isolated-on-a-white-background-24.png' alt='User logo' /> Connect Wallet</button>
            <button className="right-button button" onClick={toggleDropdown}><img src='/react-haystack/img/icons8-user-48.png' alt='User logo' /></button>
            {isOpen && (
              <div className="">
                <ul className={isDarkMode ? 'dropdown darkMode' : 'dropdown'}>
                  <li><img src="/react-haystack/img/avatar.png" alt='profile' />Profile</li>
                  <li><img className='support' src="/react-haystack/img/centre-dappel.png" alt='Support' /> Centre d'aide</li>
                  <li><img src="/react-haystack/img/parametres.png" alt='Paramètres' />Paramètres</li>
                  <li className={isDarkMode ? 'Toggle ToggleDark' : 'Toggle'}><label className="switch">
                    <input type="checkbox" onClick={()=> setIsDarkMode(!isDarkMode)}/>
                    <span className="slider"></span>
                  </label></li>
                </ul>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
