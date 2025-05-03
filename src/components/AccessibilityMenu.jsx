// src/components/AccessibilityMenu.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon }      from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import './AccessibilityMenu.css';
import { useAccessibility }      from '../contexts/AccessibilityContext';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const { isDarkMode, setIsDarkMode } = useAccessibility();

  const toggleMenu = () => setIsOpen(open => !open);

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeToggle = theme => {
    // flip the theme
    setIsDarkMode(theme === 'dark');
    // **auto-close the dropdown**
    setIsOpen(false);
  };

  const renderCheckbox = checked => (
    <span className={`custom-checkbox ${checked ? 'checked' : ''}`}>
      {checked && <FontAwesomeIcon icon={faCheck} className="checkbox-icon" />}
    </span>
  );

  return (
    <div
      ref={menuRef}
      className={`accessibility-menu-wrapper primary-button-shadow ${isOpen ? 'menu-open' : ''}`}
    >
      <div className="header-shadow" />
      <button
        className={`header-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="header-text">Text Contrast</span>
        <FontAwesomeIcon icon={faAngleDown} className="header-icon" />
      </button>

      {isOpen && (
        <div className="accessibility-dropdown">

          {/* Light Mode */}
          <label className="checkbox-option">
            <input
              type="checkbox"
              checked={!isDarkMode}
              onChange={() => handleThemeToggle('light')}
            />
            {renderCheckbox(!isDarkMode)}
            <span>Light Mode</span>
          </label>

          {/* Dark Mode */}
          <label className="checkbox-option">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={() => handleThemeToggle('dark')}
            />
            {renderCheckbox(isDarkMode)}
            <span>Dark Mode</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;





