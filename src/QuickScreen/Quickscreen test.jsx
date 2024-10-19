import React, { useState , useEffect  } from "react";
import './Quickscreen test.css';
import Header from "../Header Footer/Header";
import Footer from "../Header Footer/Footer";
import swal from "sweetalert";

function QuizTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);
 
  
  const questions = [
    {
      question: "Who is the father of HTML?",
      answers: ["Rasmus Lerdorf", "Tim Berners-Lee", "Brendan Eich", "Sergey Brin"],
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
    {
      question: "What is the largest mammal on Earth?",
      answers: ["Blue whale", "Fin whale", "Humpback whale", "Sperm"],
      correct: 0,
    },
    {
      question:"Amongst which of the following statement is TRUE about backend developmen",
      answers: ["Back-end development handles the user interface and interactions","Front-end and back-end development are responsible for the same tasks and can be used interchangeably","Back-end development manages data storage and server-side logic","Back-end development focuses on the client-side code"],
      correct: 2,
    },
    {
      question: "What is the most widely used programming language in the world?",
      answers: ["Python", "Java", "JavaScript", "C++"],
      correct: 2,
    },
    {
      question: "What is the primary function of a database in a web application?",
      answers: ["To store and manage user data", "To handle user authentication and authorization", ],
      correct: 0,
    },
    {
      question:"What is HTML?",
      answers: ["HTML describes the structure of a webpage", "HTML is the standard markup language mainly used to create web pages","HTML consists of a set of elements that helps the browser how to view the content"," All of the mentioned"],
      correct: 3,
    },
    
  ];

  useEffect(() => {
    const getRandomQuestions = (questions, num) => {
      return questions.slice(0, num); 
    };


  setRandomQuestions(getRandomQuestions(questions, 5));
},[]);
console.log(randomQuestions);

  let random = questions.sort(() => Math.random() - 0.5);

  const handleAnswer = (answerIndex) => {
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
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
    if (currentQuestion < randomQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else{
      swal({
        title: "Wow!",
        text: "Message!",
        type: "success" 
    })
    }
    setCurrentQuestion(currentQuestion + 1)
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
              You scored {score} out of {randomQuestions.length}.
            </p>
          </div>
        ) : (
          <div className="Question-box">
            <h2>Quickscreen Test</h2>
            {currentQuestion === randomQuestions.length ? (
              <h3 id="center">Thanks for taking the QuickscreenTest!</h3>
            ) : (
              <h3 className="Question">{questions[currentQuestion].question}</h3>
            )}
            {currentQuestion === randomQuestions.length  ? (
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
          
            {currentQuestion === randomQuestions.length  ? (
              <h2 id="center"><button onClick={handleShowResults}>Show Results</button></h2>
            ) : (
              <h2 id="center">
                <button onClick={handleBack}>&laquo; Back Question</button>
                <button onClick={handleNext}>
                  {currentQuestion === randomQuestions.length - 1 ? 'Submit' : 'Next Question'}&raquo;
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