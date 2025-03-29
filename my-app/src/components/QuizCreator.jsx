import React from 'react';
import StatusBar from './StatusBar';
import QuestionForm from './QuestionForm';
import PointsTracker from './PointsTracker';
import fetchQuestions from '../actions/fetchQuestions.js';


export default function QuizCreator({
  setOpen,
  points
}) {
  const [questions, setQuestions] = React.useState([]);
  
  const [notification, setNotification] = React.useState(null);

  React.useEffect(() => {
    getQuestions();
  }, [])

  async function getQuestions() {
    const questionData = await fetchQuestions();
    console.log("questionsData " + JSON.stringify(questionData, null, 2));
    setQuestions(questionData);
  }

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
    setNotification('Question added');
    
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <QuestionForm className='bg-white' onAddQuestion={addQuestion} />
        <PointsTracker className='bg-white' setOpen={setOpen} points={points} numberQuestions={questions.length}/>
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