// src/pages/SpellPage.jsx
import React, { useState } from 'react';
import PlayAudioButton from '../components/PlayAudioButton';
import words from '../WordList';
import AnswerInput from '../components/AnswerInput';
import IncorrectSpellingPage from '../components/IncorrectPage';
import CorrectSpellingPage from '../components/CorrectedSpellingPage';
import './SpellPage.css';

const SpellPage = () => {
  const [answer, setAnswer] = useState("jenuine");
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];
  const [showIncorrect, setShowIncorrect] = useState(true);
  const [tryCount, setTryCount] = useState(0);
  const [showCorrectSpelling, setShowCorrectSpelling] = useState(false);

  const handleRetry = () => {
    setTryCount(prev => prev + 1);
    setShowIncorrect(false);
    setShowCorrectSpelling(false);
  };

  const handleShowCorrect = () => {
    setShowCorrectSpelling(true);
    setShowIncorrect(false);
  };

  const handleTryAgainFromCorrect = () => {
    setTryCount(prev => prev + 1);
    setShowCorrectSpelling(false);
    setShowIncorrect(false);
    setAnswer('');
  };

  const handleSubmit = () => {
    const cleanedAnswer = answer.trim().toLowerCase();
    const cleanedWord = currentWord.word.toLowerCase();
    if (cleanedAnswer === cleanedWord) {
      // show "you are correct" page 
    } else {
      setShowIncorrect(true);
    }
  };

  if (showIncorrect) {
    return (
      <IncorrectSpellingPage
        correctWord={currentWord.word}
        userAnswer={answer}
        onRetry={handleRetry}
        onShowCorrect={handleShowCorrect}
        tryCount={tryCount}
      />
    );
  }

  if (showCorrectSpelling) {
    return (
      <CorrectSpellingPage
        correctWord={currentWord.word}
        onTryAgain={handleTryAgainFromCorrect}
        tryCount={tryCount}
      />
    );
  }

  return (
    <div className="App">
      <p className="Word-progress">Word {currentIndex + 1} out of {words.length}</p>
      <PlayAudioButton word={currentWord.word} sentence={currentWord.sentence} definition={currentWord.definition} />
      <AnswerInput value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <div className="action-buttons">
        <div className="button-wrapper">
          <div className="button-shadow" />
          <button className="action-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className="button-wrapper">
          <div className="button-shadow" />
          <button className="action-button">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpellPage;
