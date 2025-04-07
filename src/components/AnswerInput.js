// AnswerInput.js
import React from 'react';
import '../App.css';

const AnswerInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="answer-input"
      placeholder="Type your answer"
      value={value}
      onChange={onChange}
      spellCheck="false"
    />
  );
};

export default AnswerInput;
