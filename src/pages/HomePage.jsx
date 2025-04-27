import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

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

  const categories = [
    { label: 'Homophones', value: 'homophones' },
    { label: 'Tricky to Spell by Sound', value: 'tricky' },
    { label: 'Several Syllables', value: 'polysyllabic' },
  ];

  return (
    <div className="home-container">
      <h2 className="difficulty-header">Choose a Difficulty</h2>
      <div className="home-buttons">
        {['Easy', 'Medium', 'Hard'].map((level) => (
          <div key={level} className="button-wrapper secondary-button-shadow">
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
        {categories.map(({ label, value }) => (
          <div key={label} className="button-wrapper secondary-button-shadow">
            <div className="button-shadow" />
            <button
              className={`home-button ${selectedCategory === value ? 'selected' : ''}`}
              onClick={() => handleSelectCategory(value)}
            >
              {label}
            </button>
          </div>
        ))}
      </div>

      {(difficulty && category) && (
        <p className="Spell-header" style={{ fontSize: '24px', marginTop: '20px' }}>
          You selected: <strong>{difficulty}</strong> difficulty in <strong>{category}</strong> category.
        </p>
      )}

      <div className="home-buttons">
        <div className="button-wrapper primary-button-shadow" style={{ marginTop: "10px" }}>
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
