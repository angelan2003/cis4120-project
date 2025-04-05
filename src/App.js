import React, { useState } from 'react';
import './App.css';
import PlayAudioButton from './components/PlayAudioButton';
import words from './WordList'; 
import AnswerInput from './components/AnswerInput';
import IncorrectSpellingPage from './components/IncorrectPage';
import CorrectSpellingPage from './components/CorrectedSpellingPage';

function App() {
  const [answer, setAnswer] = useState("jenuine");
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];
  const [showIncorrect, setShowIncorrect] = useState(true);
  const [tryCount, setTryCount] = useState(0);
  const [showCorrectSpelling, setShowCorrectSpelling] = useState(false)

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

  if (showIncorrect) {
    return (
      <IncorrectSpellingPage 
        correctWord={currentWord.word}
        userAnswer={answer}
        onRetry = {handleRetry}
        onShowCorrect = {handleShowCorrect}
        tryCount ={tryCount}
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
      <header className="App-header">
        <p>Spell Right</p>
      </header>
      <p className="Word-progress"> Word {currentIndex + 1} out of {words.length}</p>
      <PlayAudioButton word={currentWord.word} sentence={currentWord.sentence} definition={currentWord.definition}/>
      <AnswerInput value={answer} onChange={(e) => setAnswer(e.target.value)}/>
      <button> </button>

    </div>
  );
}

export default App;
