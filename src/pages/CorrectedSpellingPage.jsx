import React from 'react';
import '../pages/SpellPage.css';


const CorrectSpellingPage = ({ correctWord, onNextWord }) => {
  return (
    <div className="App">
        <div className="Spell-header" style={{ marginTop: '20px' }} >
          <p >Correct Spelling:</p>
        </div>
      <div className="Spell-header">
        <p>{correctWord.toUpperCase().split('').join(' ')}</p>
      </div>
      <div>

      <div className="button-wrapper secondary-button-shadow">
          <div className="button-shadow" />
          <button className="action-button" onClick={onNextWord} >
          Next Word
          </button>
          </div>
      </div>
    </div>
  );
};

export default CorrectSpellingPage;