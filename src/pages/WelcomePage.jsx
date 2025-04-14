import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SpellPage.css';

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/HomePage');
  };

  return (
    <div className="welcome-container">
        <h1 className="welcome-header"> Welcome to SpellRight!</h1>
        <div className="welcome-text">
            <p> SpellRight is an app that can be used with your favorite screen reader to practice spelling. We recommend using Mac's
                VoiceOver functonality which can be found in by going to Settings-Accessibility-VoiceOver. Once activating VoiceOver, navigate the
                screen by using the control + options keys and press the right arrow to go to the next element on the screen. Personalize your 
                expereince by choosing categories of words and a difficulty level. Listen to words, hear them in sentences, and then test your 
                knowledge by typing the spelling and submit your answer for feedback. 
            </p>
        </div>
      <div className="home-buttons">
        <div className="button-wrapper primary-button-shadow" style={{ marginTop: "10px" }}>
          <div className="button-shadow" />
          <button className="home-button" onClick={handleStart}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
