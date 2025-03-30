import React, { useState, useRef } from 'react';
import insertQuestion from '../actions/insertQuestion';

const QuestionForm = ({ 
  onAddQuestion
 }) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  
  const answer1Ref = useRef(null);
  const answer2Ref = useRef(null);
  const answer3Ref = useRef(null);
  const answer4Ref = useRef(null);
  
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const onSubmit = async () => {
    // Get values directly from refs
    const answer1 = answer1Ref.current.value;
    const answer2 = answer2Ref.current.value;
    const answer3 = answer3Ref.current.value;
    const answer4 = answer4Ref.current.value;
    
    // Validate inputs
    if (!question || !answer1 || !answer2 || !answer3 || !answer4 || correctAnswerIndex === null) {
      alert('Please fill in all fields and select a correct answer');
      return;
    }
    
    // Prepare data for submission
    const data = {
      question: question,
      answer_1: answer1,
      answer_2: answer2,
      answer_3: answer3,
      answer_4: answer4,
      correct_index: correctAnswerIndex
    };
    
    try {
      // Submit data to backend
      await insertQuestion(data);
      
      // Notify parent component
      onAddQuestion();
      
      // Reset form
      setQuestion('');
      setAnswers(['', '', '', '']);
      setCorrectAnswerIndex(null);
      
      // Clear input fields
      answer1Ref.current.value = '';
      answer2Ref.current.value = '';
      answer3Ref.current.value = '';
      answer4Ref.current.value = '';
    } catch (error) {
      console.error('Error submitting question:', error);
      alert('Failed to submit question. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium mb-4">Add Question</h2>
      <form onSubmit={(e) => e.preventDefault()}>
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
          
          {/* First answer input with ref */}
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              ref={answer1Ref}
              defaultValue={answers[0]}
              onChange={(e) => handleAnswerChange(0, e.target.value)}
              placeholder="Answer 1"
              className="bg-gray-200 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                correctAnswerIndex === 0 ? 'bg-gray-300' : 'bg-white'
              }`}
              onClick={() => setCorrectAnswerIndex(0)}
            >
              {correctAnswerIndex === 0 && <div className="w-3 h-3 rounded-full bg-gray-500"></div>}
            </div>
          </div>
          
          {/* Second answer input with ref */}
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              ref={answer2Ref}
              defaultValue={answers[1]}
              onChange={(e) => handleAnswerChange(1, e.target.value)}
              placeholder="Answer 2"
              className="bg-gray-200 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                correctAnswerIndex === 1 ? 'bg-gray-300' : 'bg-white'
              }`}
              onClick={() => setCorrectAnswerIndex(1)}
            >
              {correctAnswerIndex === 1 && <div className="w-3 h-3 rounded-full bg-gray-500"></div>}
            </div>
          </div>
          
          {/* Third answer input with ref */}
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              ref={answer3Ref}
              defaultValue={answers[2]}
              onChange={(e) => handleAnswerChange(2, e.target.value)}
              placeholder="Answer 3"
              className="bg-gray-200 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                correctAnswerIndex === 2 ? 'bg-gray-300' : 'bg-white'
              }`}
              onClick={() => setCorrectAnswerIndex(2)}
            >
              {correctAnswerIndex === 2 && <div className="w-3 h-3 rounded-full bg-gray-500"></div>}
            </div>
          </div>
          
          {/* Fourth answer input with ref */}
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              ref={answer4Ref}
              defaultValue={answers[3]}
              onChange={(e) => handleAnswerChange(3, e.target.value)}
              placeholder="Answer 4"
              className="bg-gray-200 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                correctAnswerIndex === 3 ? 'bg-gray-300' : 'bg-white'
              }`}
              onClick={() => setCorrectAnswerIndex(3)}
            >
              {correctAnswerIndex === 3 && <div className="w-3 h-3 rounded-full bg-gray-500"></div>}
            </div>
          </div>
        </div>
        
        <button 
          type="button" 
          onClick={onSubmit} 
          className="w-full rounded-full text-white font-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center"
        >
          Add question
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;