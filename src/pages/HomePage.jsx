import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SpellPage.css';

const HomePage = () => {
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleSelectDifficulty = (level) => {
    setDifficulty(level);
    setSelectedDifficulty(level);
    console.log(`Selected difficulty: ${level}`);
  };

  const handleSelectCategory = (cat) => {
    setCategory(cat);
    setSelectedCategory(cat);
    console.log(`Selected category: ${cat}`);
  };

  const handleSubmit = () => {
    navigate('/SpellPage', {
      state: { difficulty, category },
    });
  };

  return (
    <div className="home-container">
      <h2 className="difficulty-header">Choose a Difficulty</h2>
      <div className="home-buttons">
        {['Easy', 'Medium', 'Hard'].map((level) => (
          <div key={level} className="button-wrapper blue-shadow">
            <div className="button-shadow" />
            <button
              className={`home-button ${selectedDifficulty === level.toLowerCase() ? 'selected' : ''}`}
              onClick={() => handleSelectDifficulty(level.toLowerCase())}
            >
              {level}
            </button>
          </div>
        ))}
      </div>

      <h2 className="difficulty-header">Choose a Category</h2>
      <div className="home-buttons">
        {['General', 'Travel', 'Business'].map((cat) => (
          <div key={cat} className="button-wrapper green-shadow">
            <div className="button-shadow" />
            <button
              className={`home-button ${selectedCategory === cat.toLowerCase() ? 'selected' : ''}`}
              onClick={() => handleSelectCategory(cat.toLowerCase())}
            >
              {cat}
            </button>
          </div>
        ))}
      </div>

      {(difficulty && category) && (
        <p className="Spell-header" style={{ color: 'white', fontSize: '24px', marginTop: '20px' }}>
          You selected: <strong>{difficulty}</strong> difficulty in <strong>{category}</strong> category.
        </p>
      )}

    <div className="home-buttons">
        <div className="button-wrapper yellow-shadow" style={{ marginTop: "10px" }}>
          <div className="button-shadow" />
          <button className="home-button" onClick={handleSubmit} disabled={!difficulty || !category}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
