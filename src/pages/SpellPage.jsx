import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PlayAudioButton from '../components/PlayAudioButton';
import WordOptionButton from '../components/WordOptionButton';
import { faVolumeHigh, faComment, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import AnswerInput from '../components/AnswerInput';
import IncorrectSpellingPage from './IncorrectPage';
import CorrectSpellingPage from './CorrectedSpellingPage';
import CorrectPage from './CorrectPage';
import './SpellPage.css';

const importWordList = (difficulty, category) => {
  try {
    return require(`../wordlists/${difficulty}-${category}.js`).default;
  } catch {
    console.error(`Missing wordlist: ${difficulty}-${category}`);
    return [];
  }
};

const SpellPage = () => {
  const navigate  = useNavigate();
  const { state } = useLocation();
  const { difficulty, category } = state || {};

  // load our list
  const words = importWordList(difficulty, category);
  const totalWords = words.length;

  // quiz state
  const [currentIndex, setCurrentIndex]     = useState(0);
  const [answer, setAnswer]                 = useState('');
  const [tryCount, setTryCount]             = useState(0);
  const [showIncorrect, setShowIncorrect]   = useState(false);
  const [showCorrectSpelling, setShowCorrectSpelling] = useState(false);
  const [showCorrectPage, setShowCorrectPage]         = useState(false);

  // track how many were right
  const [correctCount, setCorrectCount]     = useState(0);

  // sanity checks
  if (!difficulty || !category) {
    return <p style={{ color: 'white' }}>Missing difficulty/category — go back.</p>;
  }
  if (totalWords === 0) {
    return <p style={{ color: 'white' }}>No words found for that selection.</p>;
  }

  // user clicked “submit”
  const handleSubmit = () => {
    const cleanedAnswer = answer.trim().toLowerCase();
    const cleanedWord   = words[currentIndex].word.toLowerCase();

    if (cleanedAnswer === cleanedWord) {
      // correct!
      setCorrectCount(c => c + 1);
      setShowCorrectPage(true);
    } else {
      // not correct
      const nextTry = tryCount + 1;
      setTryCount(nextTry);

      if (nextTry >= 3) {
        // reveal correct spelling page
        setShowCorrectSpelling(true);
        setShowIncorrect(false);
      } else {
        setShowIncorrect(true);
      }
    }
  };

  // user wants to retry (from IncorrectPage)
  const handleRetry = () => {
    setTryCount(0);
    setShowIncorrect(false);
  };

  // user wants to see correct (from IncorrectPage)
  const handleShowCorrect = () => {
    setShowCorrectSpelling(true);
    setShowIncorrect(false);
  };

  // user tries again from correct‐spelling hint
  const handleTryAgainFromCorrect = () => {
    setTryCount(0);
    setShowCorrectSpelling(false);
    setShowIncorrect(false);
    setAnswer('');
  };

  // advance to next word *or* finish quiz
  const handleNextWord = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= totalWords) {
      // out of words → go to Completion page
      return navigate('/Completion', {
        state: {
          correctCount,
          totalWords,
          difficulty,
          category
        }
      });
    }

    // otherwise move on
    setCurrentIndex(nextIndex);
    setAnswer('');
    setTryCount(0);
    setShowCorrectPage(false);
    setShowCorrectSpelling(false);
    setShowIncorrect(false);
  };

  // Intermediate screens:
  if (showIncorrect) {
    return (
      <IncorrectSpellingPage
        correctWord={words[currentIndex].word}
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
        correctWord={words[currentIndex].word}
        onTryAgain={handleTryAgainFromCorrect}
        tryCount={tryCount}
        onNextWord={handleNextWord}
      />
    );
  }

  if (showCorrectPage) {
    return (
      <CorrectPage
        correctWord={words[currentIndex].word}
        onNextWord={handleNextWord}
      />
    );
  }

  // Main quiz UI
  const currentWord = words[currentIndex];
  return (
    <div className="App">
      <p className="Word-progress">
        Word {currentIndex + 1} out of {totalWords}
      </p>

      <div className="audio-button-row">
        <WordOptionButton
          icon={faVolumeHigh}
          label="Play word"
          textToSpeak={currentWord.word}
        />
        <WordOptionButton
          icon={faComment}
          label="Sentence"
          textToSpeak={currentWord.sentence}
        />
        <WordOptionButton
          icon={faBookOpen}
          label="Definition"
          textToSpeak={currentWord.definition}
        />
      </div>

      <AnswerInput
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
      />

      <div className="action-buttons">
        <div className="button-wrapper primary-button-shadow">
          <div className="button-shadow" />
          <button
            className="action-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <div className="button-wrapper secondary-button-shadow">
          <div className="button-shadow" />
          <button
            className="action-button"
            onClick={handleNextWord}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpellPage;
