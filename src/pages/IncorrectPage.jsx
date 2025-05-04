// import React from 'react';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../pages/IncorrectPage.css';


// const IncorrectSpellingPage = ({ correctWord, userAnswer, onRetry, onShowCorrect, tryCount}) => {
//     const userLower = userAnswer.toLowerCase();

//     const correctCount = correctWord.split('').reduce((acc, letter, index) => {
//         if (userLower[index] && userLower[index] === letter.toLowerCase()) {
//             return acc + 1;
//         }
//             return acc;
//     }, 0);

//     const renderLetterComparison = () => {
//       return correctWord.split('').map((letter, index) => {
//         const isCorrect = userLower[index] && userLower[index] === letter.toLowerCase();
//         const ariaLabel = isCorrect ? `${letter}` : 'incorrect letter';
//         const content = isCorrect ? letter : "?";

//         return (
//           <span
//             key={index}
//             style={{
//               display: 'inline-block',
//               width: '60px',
//               height: '60px',
//               lineHeight: '60px',
//               margin: '0 5px',
//               textAlign: 'center',
//               fontSize: '40px',
//               fontWeight: 'bold',
//               border: '2px solid'
//             }}
//             aria-placeholder={ariaLabel}
//           >
//             {content}
//           </span>
//         );
//       });
//     };
  
//     return (
//       <div className="App">
//         <div className="Spell-header">
//           <p>Incorrect Spelling</p>
//         </div>
//         <div style={{ textAlign: 'center'}}>
//           <FontAwesomeIcon icon={faXmark} size="10x" />
//         </div>  
//         <div style={{ marginTop: '10px' }}>
//           {renderLetterComparison()}
//         </div>
//         <p className="Word-progress">
//           You got {correctCount} out of {correctWord.length} letters correct!
//         </p>

//         <div className="action-buttons">
//           <div className="button-wrapper primary-button-shadow">
//             <div className="button-shadow" />
//               <button 
//                 className="action-button"
//                 onClick={onRetry}
//               >
//                Try Again {tryCount}/3
//               </button>
//             </div>

//           <div className="button-wrapper secondary-button-shadow">
//             <div className="button-shadow" />
//               <button 
//                 className="action-button"
//                 onClick={onShowCorrect}
//               >
//                Show Correct Spelling
//               </button>
//             </div>
//           </div>
//       </div>    
//     );
//   };
  
//   export default IncorrectSpellingPage;


// src/pages/IncorrectPage.jsx
import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../pages/IncorrectPage.css';

const IncorrectSpellingPage = ({ correctWord, userAnswer, onRetry, onShowCorrect, tryCount }) => {
  const userLower   = userAnswer.toLowerCase().trim();
  const correctLen  = correctWord.length;
  const answerLen   = userLower.length;
  const slots       = Math.max(correctLen, answerLen);
  const extraCount  = Math.max(0, answerLen - correctLen);

  // Count how many letters in the correct-word range are correct
  const correctCount = correctWord
    .split('')
    .reduce((acc, letter, index) => {
      if (userLower[index] === letter.toLowerCase()) return acc + 1;
      return acc;
    }, 0);

  const renderLetterComparison = () => {
    return Array.from({ length: slots }).map((_, index) => {
      // within correct-word range?
      if (index < correctLen) {
        const letter    = correctWord[index];
        const isCorrect = userLower[index] === letter.toLowerCase();
        const ariaLabel = isCorrect ? `${letter}` : 'incorrect letter';
        const content   = isCorrect ? letter : '?';

        return (
          <span
            key={index}
            aria-label={ariaLabel}
            style={{
              display: 'inline-block',
              width: '60px',
              height: '60px',
              lineHeight: '60px',
              margin: '0 5px',
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              border: '2px solid'
            }}
          >
            {content}
          </span>
        );
      }

      // extra letter beyond correct-word
      const extraLetter = userLower[index];
      return (
        <span
          key={index}
          aria-label={`extra letter ${extraLetter}`}
          style={{
            display: 'inline-block',
            width: '60px',
            height: '60px',
            lineHeight: '60px',
            margin: '0 5px',
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
            border: '2px dashed black'
          }}
        >
          {extraLetter}
        </span>
      );
    });
  };

  return (
    <div className="App">
      <div className="Spell-header">
        <p>Incorrect Spelling</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <FontAwesomeIcon icon={faXmark} size="10x"  aria-hidden="true"/>
      </div>

      <div style={{ marginTop: '10px' }}>
        {renderLetterComparison()}
      </div>

      <p className="Word-progress">
        You got {correctCount} out of {correctLen} letters correct!
      </p>

      {extraCount > 0 && (
        <p className="Word-progress">
          Your answer is {extraCount} letter{extraCount > 1 ? 's' : ''} too long.
        </p>
      )}

      <div className="action-buttons">
        <div className="button-wrapper primary-button-shadow">
          <div className="button-shadow" />
          <button className="action-button" onClick={onRetry}>
            Try Again {tryCount}/3
          </button>
        </div>

        <div className="button-wrapper secondary-button-shadow">
          <div className="button-shadow" />
          <button className="action-button" onClick={onShowCorrect}>
            Show Correct Spelling
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncorrectSpellingPage;

