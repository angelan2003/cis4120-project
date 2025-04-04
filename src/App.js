// App.js
import React from 'react';
import './App.css';
import PlayAudioButton from './buttons/PlayAudioButton';
import words from './WordList'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Spell Right</p>
      </header>
      {words.map((wordData, index) => (
        <PlayAudioButton key={index} word={wordData.word} sentence={wordData.sentence} definition = {wordData.definition}/>
      ))}
    </div>
  );
}

export default App;

