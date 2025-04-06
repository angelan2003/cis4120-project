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
        <button 
          className="Audio-button" 
          onClick={onTryAgain}
        >
          Try Again {tryCount}/3
        </button>
      </div>
    </div>
  );
};

export default CorrectSpellingPage;