import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CompletionPage.css';

const CompletionPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { correctCount = 0, totalWords = 0, difficulty, category } = state || {};

  const percent = totalWords > 0
    ? Math.round((correctCount / totalWords) * 100)
    : 0;

  const handleContinue = () => {
    navigate('/HomePage');
  };

  const handleTryAgain = () => {
    navigate('/SpellPage', { state: { difficulty, category } });
  };

  return (
    <div className="completion-container">
      <div className="completion-box">
        <header className="completion-box__header">
          <h1 className="completion-header">Result</h1>
        </header>
        <div className="completion-box__divider" />

        <div className="completion-box__body">
          <p className="completion-score">{correctCount} / {totalWords}</p>
          <p className="completion-percent">
            You got {percent}% of the answers correct.
          </p>
        </div>
      </div>

      <div className="completion-buttons">
        <div className="button-wrapper primary-button-shadow">
          <div className="button-shadow" />
          <button className="action-button" onClick={handleContinue}>
            Continue
          </button>
        </div>
        <div className="button-wrapper secondary-button-shadow">
          <div className="button-shadow" />
          <button className="action-button" onClick={handleTryAgain}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionPage;

