// src/pages/SpellPage.jsx
import React, { useState } from 'react';
import PlayAudioButton from '../components/PlayAudioButton';
import words from '../WordList';
import AnswerInput from '../components/AnswerInput';
import IncorrectSpellingPage from './IncorrectPage';
import CorrectSpellingPage from './CorrectedSpellingPage';
import CorrectPage from './CorrectPage';
import './SpellPage.css';

const SpellPage = () => {
  const [answer, setAnswer] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [tryCount, setTryCount] = useState(0);
  const [showCorrectSpelling, setShowCorrectSpelling] = useState(false);
  const [showCorrectPage, setShowCorrectPage] = useState(false);

  const handleRetry = () => {
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
      setShowCorrectPage(true);
    } else {
      const newTryCount = tryCount + 1;
      setTryCount(newTryCount);
  
      if (newTryCount >= 3) {
        setShowCorrectSpelling(true);
        setShowIncorrect(false);
      } else {
        setShowIncorrect(true);
      }
    }
  };

  const handleNextWord = () => {
    setCurrentIndex(prev => prev + 1);
    setAnswer('');
    setTryCount(0);
    setShowCorrectPage(false);
    setShowCorrectSpelling(false);
    setShowIncorrect(false);
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
        onNextWord={handleNextWord}
      />
    );
  }

  if (showCorrectPage) {
    return (
      <CorrectPage
        correctWord={currentWord.word}
        onNextWord={handleNextWord}
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
          <button className="action-button" onClick={handleNextWord}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpellPage;
