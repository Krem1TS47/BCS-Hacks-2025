import React, { useState } from 'react';
import QuizCard from './QuizCard';
import ProgressBar from './ProgressBar';

const TestMain = () => {
  const [currentQuestion, setCurrentQuestion] = useState(4);
  const [totalQuestions, setTotalQuestions] = useState(50);
  
  const handleSubmit = () => {
    // Logic to handle question submission
    console.log('Question submitted');
  };
  
  const handleGoBack = () => {
    // Logic to handle going back to previous question
    console.log('Going back to previous question');
  };
  
  return (
    <div className="font-sans max-w-3xl mx-auto bg-gray-100 min-h-screen"> 
      <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
      <QuizCard
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        onSubmit={handleSubmit}
        onGoBack={handleGoBack}
      />
    </div>
  );
};

export default TestMain;