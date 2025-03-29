<<<<<<< HEAD
import React, { useState } from 'react';
import QuizQuestion from './components/QuizQuestion';
import User from './components/User'; 

const App = () => {
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madr`id'],
            correctAnswer: 'Paris',
            points: 10,  // Points for this question
        },
        {
            question: 'Which planet is known as the Red Planet?',
            options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 'Mars',
            points: 15,  // Points for this question
        },
    ];

    const handleAnswerSelected = (isCorrect, points) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + points); // Add points for correct answer
        }
    };

    return (
        <div>
            <h1>Quiz App</h1>
            {questions.map((q, index) => (
                <QuizQuestion
                    key={index}
                    question={q.question}
                    options={q.options}
                    correctAnswer={q.correctAnswer}
                    points={q.points}
                    onAnswerSelected={handleAnswerSelected}
                />
            ))}
            <h2>Your Score: {score}</h2>
        </div>
    );
};
=======
import logo from './logo.svg';
import './App.css';
import Supabase from './Supabase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Supabase/>
    </div>
  );
}
>>>>>>> 9e4dab9c8fede6cdbb753453af51990900fdef2d

export default App;
