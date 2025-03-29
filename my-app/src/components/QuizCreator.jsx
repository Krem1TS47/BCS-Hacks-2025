import React from 'react';
import StatusBar from './StatusBar';
import QuestionForm from './QuestionForm';
import PointsTracker from './PointsTracker';


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
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
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