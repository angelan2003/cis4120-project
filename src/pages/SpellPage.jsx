import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PlayAudioButton from '../components/PlayAudioButton';
import WordOptionButton from '../components/WordOptionButton';
import { faVolumeHigh, faComment, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import AnswerInput from '../components/AnswerInput';
import IncorrectSpellingPage from './IncorrectPage';
import CorrectSpellingPage from './CorrectedSpellingPage';
import CorrectPage from './CorrectPage';
import './SpellPage.css';

// 🆕 Utility for loading wordlist dynamically
const importWordList = (difficulty, category) => {
  try {
    // Dynamically require based on pattern
    return require(`../wordlists/${difficulty}-${category}.js`).default;
  } catch (error) {
    console.error(`Wordlist for ${difficulty}-${category} not found.`);
    return [];
  }
};

const SpellPage = () => {
  const location = useLocation();
  const { difficulty, category } = location.state || {};

  const words = importWordList(difficulty, category);

  const [answer, setAnswer] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [tryCount, setTryCount] = useState(0);
  const [showCorrectSpelling, setShowCorrectSpelling] = useState(false);
  const [showCorrectPage, setShowCorrectPage] = useState(false);

  if (!difficulty || !category) {
    return <p style={{ color: 'white' }}>Missing difficulty or category. Go back and select both.</p>;
  }

  if (!words.length) {
    return <p style={{ color: 'white' }}>No words available for this selection.</p>;
  }

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
      <div className="audio-button-row">
        <WordOptionButton icon={faVolumeHigh} label="Play Word and Sentence" textToSpeak={`${currentWord.word}. ${currentWord.sentence}`}  />
      </div>
      <AnswerInput value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <div className="action-buttons">
        <div className="button-wrapper primary-button-shadow">
          <div className="button-shadow" />
          <button className="action-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className="button-wrapper secondary-button-shadow">
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
