import React from 'react';
import StatusBar from './StatusBar';
import QuestionForm from './QuestionForm';
import PointsTracker from './PointsTracker';


export default function QuizCreator({
  setOpen
}) {
  const [questions, setQuestions] = React.useState([]);
  
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <QuestionForm className='bg-white' onAddQuestion={addQuestion} />
        <PointsTracker className='bg-white' setOpen={setOpen} />
      </div>
      {
        notification && (
          <div className="mt-4">
            <StatusBar message={notification} />
          </div>
        )
      }
    </div>
  )
}