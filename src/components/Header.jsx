import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import AccessibilityMenu from './AccessibilityMenu';
import logo from '../assets/logos/logo.png';

const Header = ({ onSettingsClick }) => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/homePage');
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-left">
          <button
            onClick={handleHomeClick}
            className="logo-button"
            aria-label="Spell Right logo, link to home page"
          >
            <img src={logo} alt="App Logo" className="header-logo" />
          </button>

          <div className="button-wrapper primary-button-shadow">
            <div className="button-shadow" />
            <button className="header-button" onClick={handleHomeClick}>
              <FontAwesomeIcon icon={faBars} className="header-icon" />
              <span className="header-text">Menu</span>
            </button>
          </div>
        </div>

        <div className="button-wrapper">
          <AccessibilityMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
