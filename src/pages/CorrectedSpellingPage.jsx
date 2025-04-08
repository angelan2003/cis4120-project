import React from 'react';
import '../pages/SpellPage.css';


const CorrectSpellingPage = ({ correctWord, onTryAgain, tryCount }) => {
  return (
    <div className="App">
      <header className="Spell-header" style={{ marginTop: 100, padding: 0, color: "white"}}>
        <p >Correct Spelling:</p>
      </header>
      <header className="Spell-header" style={{color: "white"}}>
       <p> {correctWord.toUpperCase()} </p>
      </header>
      <div>
      <div className="button-wrapper">
        <div className="button-shadow" />
          <button className="action-button">
          Next Word
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorrectSpellingPage;