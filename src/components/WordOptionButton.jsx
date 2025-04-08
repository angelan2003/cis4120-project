import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WordOptionButton.css';

const speak = (text) => {
  const voices = window.speechSynthesis.getVoices();
  const googleVoice = voices.find(voice => voice.name === 'Google US English') 
                   || voices.find(voice => voice.lang === 'en-US');
  const speech = new SpeechSynthesisUtterance(text);
  speech.voice = googleVoice;
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
};

const WordOptionButton = ({ icon, label, textToSpeak }) => {
  return (
    <div className="button-wrapper">
      <div className="word-option-button-shadow" />
      <button className="square-button" onClick={() => speak(textToSpeak)}>
        <FontAwesomeIcon icon={icon} className="square-icon" />
        <span className="square-text">{label}</span>
      </button>
    </div>
  );
};

export default WordOptionButton;