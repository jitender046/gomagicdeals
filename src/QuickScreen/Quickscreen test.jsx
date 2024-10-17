import React, { useState } from "react";
import './Quickscreen test.css';
import Header from "../Header Footer/Header";
import Footer from "../Header Footer/Footer";
function QuizTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Rome"],
      correct: 0,
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
      correct: 2,
    },
    {
      question: "What is the smallest country in the world?",
      answers: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      correct: 0,
    },
    
  ];

  const handleAnswer = (answerIndex) => {
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    // setCurrentQuestion(currentQuestion + 1);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
 

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else{
      alert("Your test submit successfully!", setCurrentQuestion(currentQuestion + 1))
    }
  };
  return (
    <>
    <Header />
    <div className="screen">
      <div className="QuickscreenTest">
        {showResults ? (
          <div className="view_result">
            <h2>Results</h2>
            <p>
              You scored {score} out of {questions.length}.
            </p>
          </div>
        ) : (
          <div className="Question-box">
            <h2>Quickscreen Test</h2>
            {currentQuestion === questions.length ? (
              <h3 id="center">Thanks for taking the QuickscreenTest!</h3>
            ) : (
              <h3 className="Question">{questions[currentQuestion].question}</h3>
            )}
            {currentQuestion === questions.length  ? (
              <p id="center">If you want to see your result then click on Show Result button.</p>
            ) : (
              <ul key={currentQuestion}>
                {questions[currentQuestion].answers.map((answer, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        id={`check-${index}`}
                        name="answer"
                        onClick={() => handleAnswer(index)}
                      />
                      {answer}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          
            {currentQuestion === questions.length  ? (
              <h2 id="center"><button onClick={handleShowResults}>Show Results</button></h2>
            ) : (
              <h2 id="center">
                <button onClick={handleBack}>&laquo; Back Question</button>
                <button onClick={handleNext}>
                  {currentQuestion === questions.length - 1 ? 'Submit' : 'Next Question'}&raquo;
                </button>              </h2>

            )}
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default QuizTest;