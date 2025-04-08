// src/pages/SpellPage.jsx
import React, { useState } from 'react';
import PlayAudioButton from '../components/PlayAudioButton';
import WordOptionButton from '../components/WordOptionButton';
import { faVolumeHigh, faComment, faBookOpen } from '@fortawesome/free-solid-svg-icons';
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
      setShowCorrectPage(true); 
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

  if (showCorrectPage) {
    return (
      <CorrectPage
        correctWord={currentWord.word}
      />
    );
  }

  return (
    <div className="App">
      <p className="Word-progress">Word {currentIndex + 1} out of {words.length}</p>
      <div className="audio-button-row">
        <WordOptionButton icon={faVolumeHigh} label="Play word" textToSpeak={currentWord.word} />
        <WordOptionButton icon={faComment} label="Sentence" textToSpeak={currentWord.sentence} />
        <WordOptionButton icon={faBookOpen} label="Definition" textToSpeak={currentWord.definition} />
      </div>
      <AnswerInput value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <div className="action-buttons">
        <div className="button-wrapper green-shadow">
          <div className="button-shadow" />
          <button className="action-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className="button-wrapper blue-shadow">
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
