import React, { useState } from 'react';

const QuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!question || answers.some(answer => !answer) || correctAnswerIndex === null) {
      alert('Please fill in all fields and select a correct answer');
      return;
    }
    
    onAddQuestion({
      question,
      answers,
      correctAnswerIndex
    });
    
    // Reset form
    setQuestion('');
    setAnswers(['', '', '', '']);
    setCorrectAnswerIndex(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium mb-4">Add Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="text" 
            value={question}
            id="question" 
            onChange={(e) => setQuestion(e.target.value)}
            className="bg-gray-200 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your question" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span>Enter possible answers</span>
            <span>Select correct</span>
          </div>
          
          {answers.map((answer, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder={`Answer ${index + 1}`}
                className="bg-gray-200 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <div 
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                  correctAnswerIndex === index ? 'bg-gray-300' : 'bg-white'
                }`}
                onClick={() => setCorrectAnswerIndex(index)}
              >
                {correctAnswerIndex === index && <div className="w-3 h-3 rounded-full bg-gray-500"></div>}
              </div>
            </div>
          ))}
        </div>
        <button type="button" className='w-full rounded-full text-white font-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2'>
          Add question
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;