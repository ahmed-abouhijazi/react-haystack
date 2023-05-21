import React, { useEffect, useState } from 'react';
import './NavBar.css';
import Web3 from 'web3';

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [connectdButton, setConnectdButton] = useState('Connect Wallet');

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

  // Detect account change
window.ethereum.on('accountsChanged', (accounts) => {
  // Handle account change
  console.log('Account changed:', accounts[0]);
  // Update button label
  const connectedButton = document.getElementById('connected-button');
  if (connectedButton) {
    connectedButton.textContent = `Connected: ${accounts[0].substring(0, 6)}...`;
  }
});

const connectWallet = async () => {
  if (typeof window.ethereum === 'undefined') {
    // Metamask not installed
    alert('Metamask is not installed. Please install Metamask to connect your wallet.');
    return;
  }

  try {
    // Request permission to connect
    const accounts = await window.ethereum.enable();
    
    if (accounts.length === 0) {
      // No account connected
      return;
    }

    // Set connected account state
    setConnectedAccount(accounts[0]);

    // Initialize web3
    const web3 = new Web3(window.ethereum);
    
    // Detect network change
    window.ethereum.on('networkChanged', (networkId) => {
      // Handle network change
      console.log('Network changed:', networkId);
    });
    
    // Fetch current network ID
    const networkId = await web3.eth.net.getId();
    console.log('Current network ID:', networkId);
    
    // Update button label
    const connectedButton = document.getElementById('connected-button');
    if (connectedButton) {
      setConnectdButton(`Connected: ${accounts[0].substring(0, 6)}...`);
    }
    
    // Continue with your app logic
    // ...
  } catch (error) {
    // User denied connection request or error occurred
    console.error('Failed to connect wallet:', error);
  }
};
const disconnectWallet = () => {
  if (typeof window.ethereum !== 'undefined') {
    delete window.ethereum.selectedAddress;

    // Clear connected account state
    setConnectedAccount(null);
    setConnectdButton('Connect Wallet');
    // Reset UI or perform any necessary cleanup
    // ...
  }
};

  // const sendTransaction = async () => {
  //   try {
  //     const accounts = await Web3.eth.getAccounts();
  //     const transaction = {
  //       from: accounts[0],
  //       to: '0x1234567890...', // recipient address
  //       value: Web3.utils.toWei('1', 'ether') // amount in wei
  //     };
      
  //     const result = await Web3.eth.sendTransaction(transaction);
  //     console.log('Transaction sent:', result);
  //   } catch (error) {
  //     console.error('Failed to send transaction:', error);
  //   }
  // };

//   const contract = new web3.eth.Contract(abi, contractAddress);

// // Listen for a specific event
// contract.events.MyEvent()
//   .on('data', (event) => {
//     // Handle event data
//     console.log('Event:', event.returnValues);
//   })
//   .on('error', (error) => {
//     console.error('Event error:', error);
//   });
  
  return (
    <nav>
      <img src="/react-haystack/img/Website_logo.png" alt="Logo" />
      <ul >
        <li className="element" ><a href="https://ahmed-abouhijazi.github.io/react-haystack">Home</a></li>
        <li className="element" ><a href="https://ahmed-abouhijazi.github.io/react-haystack">About</a></li>
        <li className="element" ><a href="https://ahmed-abouhijazi.github.io/react-haystack">Contact</a></li>
        <li className="connect">
          <div className='button-container'>
            <button id="connected-button" className="left-button" onClick={() => {/*props.setIsConnectOpen(true);*/connectWallet();}}>{!connectedAccount && (<img src='/react-haystack/img/icons8-wallet-full-of-cash-isolated-on-a-white-background-24.png' alt='User logo' />)}{connectdButton}</button>
            <button className="right-button button" onClick={toggleDropdown}><img src='/react-haystack/img/icons8-user-48.png' alt='User logo' /></button>
            {isOpen && (
              <div className="">
                <ul className={isDarkMode ? 'dropdown darkMode' : 'dropdown'}>
                  <li><img src="/react-haystack/img/avatar.png" alt='profile' />Profile</li>
                  <li><img className='support' src="/react-haystack/img/centre-dappel.png" alt='Support' /> Centre d'aide</li>
                  <li><img src="/react-haystack/img/parametres.png" alt='Paramètres' />Paramètres</li>
                  {connectedAccount && (
                    <li onClick={disconnectWallet}><img src="/react-haystack/img/unlink.png" alt='Unlink' />Disconnect Wallet</li>
                      )}
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
