import React, { useState } from 'react';
import QuestionText from './QuestionText';
import OptionsList from './OptionList';
import incrementPoints from '../actions/incrementPoints'

const QuizCard = ({
  getPoints,
  currentQuestion,
  currentIndex,
  totalQuestions,
  onGoBack,
  setCurrentIndex,
  onScoreUpdate
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
 
  const handleOptionSelect = (optionIndex) => {
    if (!isSubmitted) {
      setSelectedOption(optionIndex);
    }
  };

  // Safe guard in case currentQuestion is undefined
  if (!currentQuestion) {
    return <div>Loading question...</div>;
  }
  
  const {
    question,
    answer_1,
    answer_2,
    answer_3,
    answer_4,
    correct_index
  } = currentQuestion;
  
  
  const handleSubmit = async () => {
    if (selectedOption === null) {
      return; 
    }
    
    const correct = selectedOption === correct_index;

    if (correct) {
      await incrementPoints();
      await getPoints();
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
    
    // Update the score in the parent component
    if (onScoreUpdate) {
      onScoreUpdate(correct);
    }
  };
  
  // Reset the component state for the next question
  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(null);

    setCurrentIndex(currentIndex + 1);
  };
 
  return (
    <div className="bg-white rounded-lg m-5 p-6 shadow">
      <button
        className="shadow-lg shadow-blue-500/50 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 text-white border-none rounded-full px-4 py-2 cursor-pointer"
        onClick={onGoBack}
      >
        Go back
      </button>
     
      <div className="my-8">
        <h2 className="text-center text-xl font-bold mb-6">Question {currentIndex}/{totalQuestions}</h2>
       
        <QuestionText text={question} />
       
        <OptionsList
          options={[
            answer_1,
            answer_2,
            answer_3,
            answer_4
          ]}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
          isSubmitted={isSubmitted}
          correctIndex={isSubmitted ? correct_index : null}
        />
      </div>
     
      {!isSubmitted ? (
        <button
          className="shadow-lg shadow-blue-500/50 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 text-white border-none rounded-full py-3 px-6 text-base cursor-pointer w-full mt-6 disabled:opacity-50"
          onClick={handleSubmit}
          disabled={selectedOption === null}
        >
          Submit answer
        </button>
      ) : (
        <div className="mt-6">
          <div className={`p-4 mb-4 text-center rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect. The correct answer was option ' + (correct_index + 1)}
          </div>
          <button
            className="shadow-lg shadow-blue-500/50 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 text-white border-none rounded-full py-3 px-6 text-base cursor-pointer w-full"
            onClick={handleNext}
          >
            Next question
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizCard;