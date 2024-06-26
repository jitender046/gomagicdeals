import React, { useState } from 'react';

const Question = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    // Handle submission logic here
  };

  return (
    <div className="container">
      <h1>Question 1</h1>
      <p>(Points: 4 | Negative marking: -1)</p>
      <h2>MCQ_OUTPUT_BASE Hard: 4</h2>
      <h3>Select Single Correct Answer</h3>
      <div className="answer-options">
        <label>
          <input
            type="radio"
            name="answer"
            value="A"
            checked={selectedAnswer === 'A'}
            onChange={() => handleAnswerChange('A')}
          />
          A. O a
        </label>
        <label>
          <input
            type="radio"
            name="answer"
            value="B"
            checked={selectedAnswer === 'B'}
            onChange={() => handleAnswerChange('B')}
          />
          B. O a
        </label>
        <label>
          <input
            type="radio"
            name="answer"
            value="C"
            checked={selectedAnswer === 'C'}
            onChange={() => handleAnswerChange('C')}
          />
          C. O a
        </label>
      </div>
      <button onClick={handleSubmit} disabled={!selectedAnswer}>
        Submit
      </button>
    </div>
  );
};
 export default Question;