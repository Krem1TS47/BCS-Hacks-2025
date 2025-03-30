import React from 'react';

const OptionsList = ({ 
  options, 
  selectedOption, 
  onOptionSelect
}) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      {options.map((option, index) => (
        <div 
          key={index} 
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => onOptionSelect(index)}
        >
          <div className={`w-5 h-5 rounded-full border-2 ${selectedOption === index ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-gray-100'}`}></div>
          <div className="text-base">{option}</div>
        </div>
      ))}
    </div>
  );
};

export default OptionsList;