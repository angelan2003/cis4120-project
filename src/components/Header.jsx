// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onHomeClick, onSettingsClick }) => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-button-wrapper">
          <div className="header-shadow" />
          <button className="header-button" onClick={onHomeClick}>
            <FontAwesomeIcon icon={faHome} className="header-icon" />
            <span className="header-text">Home</span>
          </button>
        </div>

        <div className="header-button-wrapper">
          <div className="header-shadow" />
          <button className="header-button" onClick={onSettingsClick}>
            <span className="header-text">Text Size & Contrast</span>
            <FontAwesomeIcon icon={faAngleDown} className="header-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

