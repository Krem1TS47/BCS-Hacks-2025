import React from 'react';
import { GiStarGate } from "react-icons/gi";

const PointsTracker = ({
  setOpen,
  points,
  numberQuestions,
  setCurrentIndex
}) => {
  console.log('points: ' + points);

  const greenBar = (points /10 >= 1)? '100%': `${String(points/10*100)}%`;
  const yellowBar = (points /20 >= 1)? '100%': `${String(points/20*100)}%`;
  const redBar = (points /50 >= 1)? '100%': `${String(points/50*100)}%`;

  console.log('greenBar: ' + greenBar);
  console.log('yellowBar: ' + yellowBar);
  console.log('redBar: ' + redBar);

  function startQuiz() {
    setOpen(false);
    setCurrentIndex(1);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium mb-4">Your Point Progress!</h2>
      <div className="space-y-2 mb-6">
        <div className="space-y-1">
          <div className="flex items-center justify-between">          
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-200">
              <div className="shadow-lg shadow-green-500/50  h-3 bg-green-500 rounded-full" style={{ width: greenBar }}></div>
            </div>
            <span className='pl-4'>10</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between">          
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-200">
              <div className="shadow-lg shadow-yellow-500/50 h-3 bg-yellow-300 rounded-full" style={{ width: yellowBar }}></div>
            </div>
            <span className='pl-4'>20</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">          
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-200">
              <div className="shadow-lg shadow-red-500/50 h-3 bg-red-500 rounded-full" style={{ width: redBar }}></div>
            </div>
            <span className='pl-4'>50</span>
          </div>
        </div>
      </div>      

      <div className="flex items-center gap-2 text-lg font-medium p-2 pt-7 pb-9">
        {/* Star Icon */}
        <span className="text-yellow-300">
          <GiStarGate size={35} />
        </span>
        
        {/* Text */}
        <span>Earn Points to Buy Medals!</span>
      </div>
      
      <div className="space-y-4">
        <div className="text-center mb-2">
          <p className='pt-8'>Questions created: {numberQuestions}</p>
        </div>
        
        <button 
          onClick={() => startQuiz()} 
          type="button" 
          className='shadow-lg shadow-cyan-500/50 w-full rounded-full text-white font-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2'
        >
          Start quiz
        </button>
      </div>
    </div>
  )
};

export default PointsTracker;