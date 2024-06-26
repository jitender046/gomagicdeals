import React, { useState } from 'react';
import './Quickscreen test.css';

function QuizTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Rome'],
      correct: 0,
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
      correct: 2,
    },
    {
      question: 'What is the smallest country in the world?',
      answers: ['Vatican City', 'Monaco', 'Nauru', 'Tuvalu'],
      correct: 0,
    },
    {
      question: 'Thanks for giving the QuickscreenTest',
      answers: [],
      // correct: 0,
    },
  ];

  const handleAnswer = (answerIndex) => {
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  return (
    <div className="screen">
      <div className='QuickscreenTest'>
      {showResults? (
        <div>
          <h2>Results</h2>
          <p>
            You scored {score} out of {questions.length-1}.
          </p>
        </div>
      ) : (
        <div className='Question-box'>
          <h2>Quickscreen Test</h2>
          {/* <p>Question {currentQuestion + 1} of {questions.length-1}</p> */}
          <h3 className='Question'>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(index)}>{answer}</button>
              </li>
            ))}
          </ul>
          {/* button change code here... */}
          {currentQuestion === questions.length -1? (
            <h2 id='center'><button  onClick={handleShowResults}>Show Results</button></h2>
          ) : (
            <h2 id='center'><button  onClick={() => setCurrentQuestion(currentQuestion + 1)}> Next Question &raquo;</button></h2>
          )}
        </div>
      )}
    </div>
    </div>
  );
}

export default QuizTest;