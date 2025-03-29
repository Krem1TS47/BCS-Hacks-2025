import React from 'react';
import StatusBar from './StatusBar';
import QuestionForm from './QuestionForm';
import PointsTracker from './PointsTracker';
import { FaStar } from "react-icons/fa";
import { FaTrophy, FaMedal } from "react-icons/fa6";
import { GiCutDiamond } from "react-icons/gi";


export default function QuizCreator() {
  const [questions, setQuestions] = React.useState([]);
  const [points, setPoints] = React.useState(5);
  const [notification, setNotification] = React.useState(null);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
    setNotification('Question added');
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow">
        {/* Header bar */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="font-medium">Name</span>
            <div className="flex gap-1">
              <span className="text-green-500">
                <FaTrophy size={24}/>
              </span>
              <span className="text-yellow-300">
                <FaMedal size={24}/>
              </span>
              <span className="text-red-500">
                <GiCutDiamond size={24}/>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-300">
              <FaStar size={24}/>
            </span>
            <span className="font-medium">Points {points}</span>
          </div>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <QuestionForm onAddQuestion={addQuestion} />
          <PointsTracker />
        </div>
      </div>
      
      {/* Status bar */}
      {notification && (
        <div className="mt-4">
          <StatusBar message={notification} />
        </div>
      )}
    </div>
  )
}