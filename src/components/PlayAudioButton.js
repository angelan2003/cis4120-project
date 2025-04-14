// PlayAudioButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const speak = (text) => {
  const voices = window.speechSynthesis.getVoices();
  const googleVoice = voices.find(voice => voice.name === 'Google US English') 
                      || voices.find(voice => voice.lang === 'en-US');
  const speech = new SpeechSynthesisUtterance(text);
  speech.voice = googleVoice;
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
};


const PlayAudioButton = ({ word, sentence }) => {
  const text = `${word}. ${sentence}`;
  return (
    <div className="Audio-button-container">
      <button className="Audio-button" onClick={() => speak(text)}>
        <FontAwesomeIcon icon={faVolumeHigh} size="2xl" style={{ color: "#000000", marginRight: "10px" }} />
        Play Word + Sentence
      </button>
    </div>
  );
};

export default PlayAudioButton;





