import React from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose,isloading, children }) => {
  if (!isOpen) return null;
  if(isloading){
    return (
      <div className="popup-overlay">
        <div className="popup-loading">
          <div className="popup-content">{children}</div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="popup-overlay">
        <div className="popup">
          <button className="popup-close" onClick={onClose}>X</button>
          <div className="popup-content">{children}</div>
        </div>
      </div>
    );
  }
  
};

export default Popup;
