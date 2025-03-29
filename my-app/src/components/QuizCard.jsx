import React, { useState } from 'react';
import QuestionText from './QuestionText';
import OptionsList from './OptionList';

const QuizCard = ({ currentQuestion, totalQuestions, onSubmit, onGoBack }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };
  
  return (
    <div className="bg-white rounded-lg m-5 p-6 shadow">
      <button 
        className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 text-white border-none rounded-full px-4 py-2 cursor-pointer"
        onClick={onGoBack}
      >
        Go back
      </button>
      
      <div className="my-8">
        <h2 className="text-center text-xl font-bold mb-6">Question {currentQuestion}/{totalQuestions}</h2>
        
        <QuestionText text="asdk.jshdfk.jasd alskdjf laksjdfh laksdj falskdjfalskdjfhlaksjdfasdf" />
        
        <OptionsList 
          options={[
            "asdk.jshdfk.jasd alskdjf laksjdfh laksdj f",
            "alskdjfalskdjfhlaksjdfasdf",
            "asdfasdf",
            "asdfasd"
          ]}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
        />
      </div>
      
      <button 
        className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 text-white border-none rounded-full py-3 px-6 text-base cursor-pointer w-full mt-6"
        onClick={onSubmit}
      >
        Submit question
      </button>
    </div>
  );
};

export default QuizCard;