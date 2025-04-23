// AnswerInput.js
import React from 'react';
import '../App.css';

const AnswerInput = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type="text"
      className="answer-input"
      placeholder="Type your answer"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      spellCheck="false"
    />
  );
};

export default AnswerInput;
