import React, { useState } from 'react';
import './App.css';
import PlayAudioButton from './components/PlayAudioButton';
import words from './WordList'; 
import AnswerInput from './components/AnswerInput';

function App() {
  const [answer, setAnswer] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];

  return (
    <div className="App">
      <header className="App-header">
        <p>Spell Right</p>
      </header>
      <p className="Word-progress"> Word {currentIndex + 1} out of {words.length}</p>
      <PlayAudioButton word={currentWord.word} sentence={currentWord.sentence} definition={currentWord.definition}/>
      <AnswerInput value={answer} onChange={(e) => setAnswer(e.target.value)}/>
    </div>
  );
}

export default App;
