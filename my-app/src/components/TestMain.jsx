import React from 'react';
import QuizCard from './QuizCard';

const TestMain = ({
  setOpen,
  questions,
  currentIndex,
  setCurrentIndex
}) => {
  const progressBar = `${String(currentIndex/questions.length*100)}%`;

  function nextQuestion() {
    setCurrentIndex(currentIndex + 1);
  }
  const handleSubmit = () => {
    // Logic to handle question submission
    console.log('Question submitted');
  };
  
  const handleGoBack = () => {
    setOpen(true);
  };
  
  return (
    <div className="font-sans max-w-3xl mx-auto bg-gray-100 min-h-screen"> 
      <div className="pt-4">
        <div className="flex items-center justify-between">          
          <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-200">
            <div className="h-3 bg-purple-500 rounded-full" style={{ width: progressBar }}></div>
          </div>
        </div>
      </div>
      <QuizCard
        currentQuestion={currentIndex}
        totalQuestions={questions.length}
        onSubmit={handleSubmit}
        onGoBack={handleGoBack}
      />
    </div>
  );
};

export default TestMain;