// src/App.js
import React from 'react';
import SpellPage from './pages/SpellPage';
import IncorrectSpellingPage from './pages/IncorrectPage';
import CorrectPage from './pages/CorrectPage';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CorrectSpellingPage from './pages/CorrectedSpellingPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<SpellPage />} />
          <Route path="/SpellPage" element={<SpellPage />} />
          <Route path="/IncorrectSpellingPage" element={<IncorrectSpellingPage correctWord={''} userAnswer={''}/>} />
          <Route path="/CorrectSpellingPage" element={<CorrectSpellingPage correctWord={''}/>} />
          <Route path="/CorrectPage" element={<CorrectPage correctWord={''}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
