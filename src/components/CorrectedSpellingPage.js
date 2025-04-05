import React from 'react';
import '../App.css';

const CorrectSpellingPage = ({ correctWord, onTryAgain, tryCount }) => {
  return (
    <div className="App">
      <header className="App-header" style={{ marginTop: 100, padding: 0}}>
        <p >Correct Spelling:</p>
      </header>
      <header className="App-header">
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