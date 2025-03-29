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
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question"
            className="w-full p-2 bg-gray-200 rounded-lg"
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
                className="flex-grow p-2 bg-gray-200 rounded-lg"
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
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Add question
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;