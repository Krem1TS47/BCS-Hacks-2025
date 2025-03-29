import React, { useState } from 'react';
import NavigBar from './NavigBar';
import QuizCard from './QuizCard';

const TestMain = () => {
  const [currentQuestion, setCurrentQuestion] = useState(4);
  const [totalQuestions, setTotalQuestions] = useState(50);
  const [points, setPoints] = useState(5);
  
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
      <NavigBar points={points} />
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