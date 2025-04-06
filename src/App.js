// src/App.js
import React from 'react';
import SpellPage from './pages/SpellPage';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SpellPage />
    </div>
  );
}

export default App;
