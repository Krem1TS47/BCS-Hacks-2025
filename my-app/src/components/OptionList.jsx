import React from 'react';

const OptionsList = ({
  options,
  selectedOption,
  onOptionSelect,
  isSubmitted,
  correctIndex
}) => {
  return (
    <div className="space-y-3 my-6">
      {options.map((option, index) => {
        let optionClass = "border-2 border-gray-200 p-4 rounded-lg cursor-pointer transition-all";
        
        if (selectedOption === index) {
          optionClass = "border-2 border-purple-500 p-4 rounded-lg cursor-pointer transition-all";
        }
        
        if (isSubmitted) {
          if (index === correctIndex) {
            optionClass = "border-2 border-green-500 bg-green-50 p-4 rounded-lg transition-all";
          } else if (selectedOption === index && index !== correctIndex) {
            optionClass = "border-2 border-red-500 bg-red-50 p-4 rounded-lg transition-all";
          }
        }
        
        return (
          <div 
            key={index}
            className={optionClass}
            onClick={() => onOptionSelect(index)}
          >
            <div className="flex items-start">
              <div className="mr-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
              <span>{option}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OptionsList;