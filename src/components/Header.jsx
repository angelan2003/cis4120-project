// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logos/logo.png';

const Header = ({ onHomeClick, onSettingsClick }) => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-left">
          <img src={logo} alt="Spell Right" className="header-logo" />
          <div className="header-button-wrapper">
            <div className="header-shadow" />
            <button className="header-button" onClick={onHomeClick}>
              <FontAwesomeIcon icon={faBars} className="header-icon" />
              <span className="header-text">Menu</span>
            </button>
          </div>
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

