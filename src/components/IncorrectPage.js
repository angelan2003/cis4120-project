import React from 'react';
import '../App.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const IncorrectSpellingPage = ({ correctWord, userAnswer, onRetry, onShowCorrect, tryCount}) => {
    const userLower = userAnswer.toLowerCase();

    // Calculate the number of letters the user got correct.
    const correctCount = correctWord.split('').reduce((acc, letter, index) => {
        if (userLower[index] && userLower[index] === letter.toLowerCase()) {
            return acc + 1;
        }
            return acc;
    }, 0);

    // Create a letter-by-letter display comparing correctWord and userAnswer
    const renderLetterComparison = () => {
      return correctWord.split('').map((letter, index) => {
        // Compare letter at same index if exists in user's answer
        const isCorrect = userLower[index] && userLower[index] === letter.toLowerCase();
        return (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: '40px',
              height: '60px',
              lineHeight: '60px',
              margin: '0 5px',
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: isCorrect ? 'green' : 'transparent',
              backgroundColor: isCorrect ? 'transparent' : 'white',
              border: '2px solid white'
            }}
          >
            {isCorrect ? letter : letter}
          </span>
        );
      });
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <p>Incorrect Spelling</p>
        </header>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <FontAwesomeIcon icon={faXmark} size="10x" style={{ color: "#ffffff"}} />
          <div style={{ marginTop: '10px' }}>
            {renderLetterComparison()}
          </div>
          <p className="Word-progress">
            You got {correctCount} out of {correctWord.length} letters correct!
          </p>

          <div style={{ marginTop: '40px' }}>
          <button 
            className="Audio-button" 
            onClick={onRetry}
            style={{ marginRight: '20px' }}
          >
            Try Again {tryCount}/3
          </button>
          <button 
            className="Audio-button" 
            onClick={onShowCorrect}
          >
            Get Correct Spelling
          </button>
        </div>

        </div>    
      </div>
    );
  };
  
  export default IncorrectSpellingPage;
