// src/contexts/AccessibilityContext.js
import React, { createContext, useState, useContext } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Light mode by default
  const [isLargeText, setIsLargeText] = useState(false);

  return (
    <AccessibilityContext.Provider value={{
      isDarkMode,
      setIsDarkMode,
      isLargeText,
      setIsLargeText,
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
