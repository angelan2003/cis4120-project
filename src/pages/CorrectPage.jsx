//CorrectPage.jsx
import React from 'react';
import '../pages/SpellPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CorrectPage = ({ correctWord, onNextWord, streak }) => {
  return (
    <div className="App">
      <header className="Spell-header" style={{ marginTop: 50, padding: 0 }}>
        <p>Correct!</p>
      </header>
      <FontAwesomeIcon icon={faCheck} size="10x" />
      <header className="Spell-header">
        <p>{correctWord.toUpperCase()}</p>
      </header>
      {streak > 0 && (
        <p className="Word-progress">🔥 Streak: {streak}</p>
      )}
      <div className="action-buttons">
        <div className="button-wrapper primary-button-shadow">
          <div className="button-shadow" />
          <button
            className="action-button"
            onClick={onNextWord}
          >
            Next Word
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorrectPage;