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


const PlayAudioButton = ({ word, sentence, definition }) => {
  return (
    <div className="Audio-button-container">
      {/* Button to play the word */}
      <button className="Audio-button" onClick={() => speak(word)}>
        <FontAwesomeIcon icon={faVolumeHigh} size="2xl" style={{ color: "#000000", marginRight: "10px" }} />
        Play word
      </button>
      {/* Button to hear it in a sentence */}
      <button className="Audio-button" onClick={() => speak(sentence)}>
        <FontAwesomeIcon icon={faComment} size="2xl" style={{ color: "#000000", marginRight: "10px" }} />
        Sentence
      </button>
      {/* Button to hear definition */}
      <button className="Audio-button" onClick={() => speak(definition)}>
        <FontAwesomeIcon icon={faBookOpen} size="2xl" style={{ color: "#000000", marginRight: "10px" }} />
        Definition
      </button>
    </div>
  );
};

export default PlayAudioButton;





