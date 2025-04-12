import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import './AccessibilityMenu.css';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeToggle = (theme) => {
    if (theme === 'light') {
      setLightMode(true);
      setDarkMode(false);
    } else {
      setLightMode(false);
      setDarkMode(true);
    }
  };

  const renderCheckbox = (checked) => (
    <span className={`custom-checkbox ${checked ? 'checked' : ''}`}> 
      {checked && <FontAwesomeIcon icon={faCheck} className="checkbox-icon" />} 
    </span>
  );

  return (
    <div className={`accessibility-menu-wrapper ${isOpen ? 'menu-open' : ''}`} ref={menuRef}>
      <div className="header-shadow" />
      <button
        className={`header-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup="true"
        >
        <span className="header-text">Text Size & Contrast</span>
        <FontAwesomeIcon icon={faAngleDown} className="header-icon" />
      </button>
      {isOpen && (
        <div className="accessibility-dropdown">
          <label className="checkbox-option">
            <input
              type="checkbox"
              checked={largeText}
              onChange={() => setLargeText(!largeText)}
            />
            {renderCheckbox(largeText)}
            <span>Large Text</span>
          </label>
          <label className="checkbox-option">
            <input
              type="checkbox"
              checked={lightMode}
              onChange={() => handleThemeToggle('light')}
            />
            {renderCheckbox(lightMode)}
            <span>Light Mode</span>
          </label>
          <label className="checkbox-option">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => handleThemeToggle('dark')}
            />
            {renderCheckbox(darkMode)}
            <span>Dark Mode</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;



