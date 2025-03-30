import React from 'react';
import QuestionForm from './QuestionForm';
import PointsTracker from './PointsTracker';


export default function QuizCreator({
  setOpen,
  points,
  questions,
  setCurrentIndex,
  onAddQuestion
}) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <QuestionForm className='bg-white' onAddQuestion={onAddQuestion} />
        <PointsTracker 
          className='bg-white' 
          setOpen={setOpen} 
          points={points} 
          numberQuestions={questions.length}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  )
}