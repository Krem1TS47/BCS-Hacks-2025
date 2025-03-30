import React, {useState, useEffect} from 'react';
import QuizCard from './QuizCard';

const TestMain = ({
  getPoints,
  setOpen,
  questions,
  currentIndex,
  setCurrentIndex
}) => {

  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const progressBar = `${String(Math.round((currentIndex/questions.length)*100))}%`;

  
  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Quiz is finished - handle completion
      console.log('Quiz completed!');
      // You might want to show results or navigate somewhere
    }
  };


  const handleScoreUpdate = (isCorrect) => {
    if (isCorrect && !answeredQuestions.includes(currentIndex)) {
      setScore(prevScore => prevScore + 1);
      setAnsweredQuestions(prev => [...prev, currentIndex]);
    }
  };
 
  const handleGoBack = () => {
    setOpen(true);
  };
  
  // Get current question safely (using index - 1)
  const currentQuestion = questions[currentIndex - 1];
  console.log('currentQuestion: ' + JSON.stringify(currentQuestion, null, 2));
  
  // If we've gone past the last question, show completion
  if (currentIndex > questions.length) {
    return (
      <div className="font-sans max-w-3xl mx-auto bg-white rounded-lg m-5 p-6 shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="mb-6">You've answered all the questions.</p>
        <p className="mb-5"> Quiz Score: {score} / {questions.length} </p> 
        <button
          className="shadow-lg shadow-blue-500/50 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 text-white border-none rounded-full px-4 py-2 cursor-pointer"
          onClick={handleGoBack}
        >
          Back to Start
        </button>
      </div>
    );
  }
 
  return (
    <div className="font-sans max-w-3xl mx-auto">
      <div className="pt-4">
        <div className="flex items-center justify-between">          
          <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-200">
            <div className="shadow-lg shadow-purple-500/50 h-3 bg-purple-500 rounded-full" style={{ width: progressBar }}></div>
          </div>
        </div>
      </div>
      <QuizCard
        getPoints={getPoints}
        currentQuestion={currentQuestion}
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        // onCorrect={handleCorrect}
        onGoBack={handleGoBack}
        nextQuestion={nextQuestion}
        setCurrentIndex={setCurrentIndex}
        onScoreUpdate={handleScoreUpdate}
      />
    </div>
  );
};

export default TestMain;