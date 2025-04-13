//CorrectPage.jsx
import React from 'react';
import '../pages/SpellPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CorrectPage = ({ correctWord, onNextWord }) => {
  return (
    <div className="App">
      <header className="Spell-header" style={{ marginTop: 100, padding: 0}}>
        <p >Correct!</p>
      </header>
      <FontAwesomeIcon icon={faCheck} size="10x" />
      <header className="Spell-header">
       <p> {correctWord.toUpperCase()} </p>
      </header>
      <div>
        <div className="button-wrapper">
          <div className="button-shadow" />
          <button className="action-button" style={{ margin: '20px' }} onClick={onNextWord}>
            Next Word
          </button>
        </div>
      </div>
    </div>
  );
};
export default CorrectPage;