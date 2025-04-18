import React from 'react';
import '../pages/SpellPage.css';


const CorrectSpellingPage = ({ correctWord, onNextWord }) => {
  return (
    <div className="App">
      <header className="Spell-header" style={{ margin: '90px', padding: 0 }}>
        <p >Correct Spelling:</p>
      </header>
      <header className="Spell-header">
        <p>{correctWord.toUpperCase().split('').join(' ')}</p>
      </header>
      <div>
      <div className="button-wrapper">
        <div className="button-shadow" />
          <button className="action-button" style={{ margin: '90px' }} onClick={onNextWord}>
          Next Word
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorrectSpellingPage;