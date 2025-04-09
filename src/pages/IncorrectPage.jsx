import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../pages/IncorrectPage.css';


const IncorrectSpellingPage = ({ correctWord, userAnswer, onRetry, onShowCorrect, tryCount}) => {
    const userLower = userAnswer.toLowerCase();

    const correctCount = correctWord.split('').reduce((acc, letter, index) => {
        if (userLower[index] && userLower[index] === letter.toLowerCase()) {
            return acc + 1;
        }
            return acc;
    }, 0);

    const renderLetterComparison = () => {
      return correctWord.split('').map((letter, index) => {
        const isCorrect = userLower[index] && userLower[index] === letter.toLowerCase();
        const ariaLabel = isCorrect ? `${letter}` : 'incorrect letter';
        const content = isCorrect ? letter : "?";

        return (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: '60px',
              height: '60px',
              lineHeight: '60px',
              margin: '0 5px',
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: 'white',
              border: '2px solid white'

            }}
            aria-placeholder={ariaLabel}
          >
            {content}
          </span>
        );
      });
    };
  
    return (
      <div className="App">
        <div className="Spell-header">
          <p>Incorrect Spelling</p>
        </div>
        <div style={{ textAlign: 'center'}}>
          <FontAwesomeIcon icon={faXmark} size="10x" style={{ color: "#ffffff"}} />
        </div>  
        <div style={{ marginTop: '10px' }}>
          {renderLetterComparison()}
        </div>
        <p className="Word-progress">
          You got {correctCount} out of {correctWord.length} letters correct!
        </p>

        <div className="action-buttons">
          <div className="button-wrapper green-shadow">
            <div className="button-shadow" />
              <button 
                className="action-button"
                onClick={onRetry}
              >
               Try Again {tryCount}/3
              </button>
            </div>

          <div className="button-wrapper blue-shadow">
            <div className="button-shadow" />
              <button 
                className="action-button"
                onClick={onShowCorrect}
              >
               Show Correct Spelling
              </button>
            </div>
          </div>
      </div>    
    );
  };
  
  export default IncorrectSpellingPage;