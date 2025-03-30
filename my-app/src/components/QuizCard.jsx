
import React, { useState, useEffect } from 'react';
import QuestionText from './QuestionText';
import OptionsList from './OptionList';

import incrementPoints from '../actions/incrementPoints'
import Timer from '../actions/Timer';

import incrementPoints from '../actions/incrementPoints';



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

  const [resetTimer, setResetTimer] = useState(false);
 

  const [randomizedOptions, setRandomizedOptions] = useState([]);
  const [randomToOriginalMap, setRandomToOriginalMap] = useState([]);
  
  // Randomize the options when the current question changes
  useEffect(() => {
    if (!currentQuestion) return;
    
    const { answer_1, answer_2, answer_3, answer_4 } = currentQuestion;
    const originalOptions = [answer_1, answer_2, answer_3, answer_4];
    
    // Create array of objects with original index and answer text
    const optionsWithIndex = originalOptions.map((option, index) => ({
      originalIndex: index,
      text: option
    }));
    
    // Shuffle the options
    const shuffled = [...optionsWithIndex].sort(() => Math.random() - 0.5);
    
    // Extract the randomized texts and create a mapping from new index to original index
    const texts = shuffled.map(item => item.text);
    const indexMap = shuffled.map(item => item.originalIndex);
    
    setRandomizedOptions(texts);
    setRandomToOriginalMap(indexMap);
    
    // Reset state when question changes
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(null);
  }, [currentQuestion]);


  const handleOptionSelect = (optionIndex) => {
    if (!isSubmitted) {
      setSelectedOption(optionIndex);
    }
  };

  // Safe guard in case currentQuestion is undefined
  if (!currentQuestion) {
    return <div>Loading question...</div>;
  }
  
  const { question, correct_index } = currentQuestion;
  
  
  const handleSubmit = async () => {
    if (selectedOption === null) {
      return; 
    }
    
    // Map the selected randomized option back to its original index to check correctness
    const originalSelectedIndex = randomToOriginalMap[selectedOption];
    const correct = originalSelectedIndex === correct_index;

    if (correct) {
      await incrementPoints();
      await getPoints();
    }

    setIsCorrect(correct);
    setIsSubmitted(true);


    //setResetTimer((prev) => !prev);

    
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
    setResetTimer((prev) => !prev);


  };

  // Find which randomized option corresponds to the correct answer
  const getRandomizedCorrectIndex = () => {
    return randomToOriginalMap.findIndex(originalIndex => originalIndex === correct_index);
  };
 
  return (
    <div className="bg-white rounded-lg m-5 p-6 shadow">

      <div className = "flex justify-between items-center p-4">
        <button
          className="shadow-lg shadow-blue-500/50 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 text-white border-none rounded-full px-4 py-2 cursor-pointer"
          onClick={onGoBack}
        >
          Go back
        </button>
        <div className="text-right font-bold text-gray-700">
          <tr> Time left: <Timer reset={resetTimer} /> </tr>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-center text-xl font-bold mb-6">Question {currentIndex}/{totalQuestions}</h2>
       
        <QuestionText text={question} />
       
        <OptionsList
          options={randomizedOptions}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
          isSubmitted={isSubmitted}
          correctIndex={isSubmitted ? getRandomizedCorrectIndex() : null}
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
            {isCorrect ? 'Correct!' : `Incorrect. The correct answer was option ${getRandomizedCorrectIndex() + 1}`}
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