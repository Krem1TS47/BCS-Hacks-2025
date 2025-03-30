import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import fetchPoints from './actions/fetchPoints';
import fetchQuestions from './actions/fetchQuestions.js';
import './App.css';
import Header from './components/Header';
import QuizCreator from './components/QuizCreator';
import Shop from './components/Shop'; // Import the Shop page
import TestMain from './components/TestMain';

export default function App() {
  const [open, setOpen] = useState(true);
  const [points, setPoints] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(1);

  React.useEffect(() => {
    getQuestions();
    getPoints();
  }, []);

  async function getQuestions() {
    const questionData = await fetchQuestions();
    console.log("questionsData " + JSON.stringify(questionData, null, 2));
    setQuestions(questionData);
  }

  async function getPoints() {
    const pointsData = await fetchPoints();
    console.log("pointsData: " + pointsData);
    setPoints(pointsData);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header points={points} />
      {
        open? (
          <QuizCreator 
            setOpen={setOpen} 
            points={points} 
            questions={questions} 
            setCurrentIndex={setCurrentIndex}
            onAddQuestion={getQuestions}
          />
        ) : (
          <TestMain 
            getPoints={getPoints}
            setOpen={setOpen} 
            questions={questions}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}  
          />
        )
      } 
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-500">
          <div className="flex justify-center mt-4">
            <Link to="/shop">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">
                Open Shop
              </button>
            </Link>
          </div>

          <Routes>
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </Router>
    </div>
    
  )
}
