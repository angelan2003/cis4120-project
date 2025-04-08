import React from 'react';
import '../pages/SpellPage.css';


const CorrectSpellingPage = ({ correctWord, onNextWord }) => {
  return (
    <div className="App">
      <header className="Spell-header" style={{ marginTop: 50, padding: 0, color: "white"}}>
        <p >Correct Spelling:</p>
      </header>
      <header className="Spell-header" style={{color: "white"}}>
       <p> {correctWord.toUpperCase()} </p>
      </header>
      <div>
      <div className="button-wrapper">
        <div className="button-shadow" />
          <button className="action-button" onClick={onNextWord}>
          Next Word
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorrectSpellingPage;