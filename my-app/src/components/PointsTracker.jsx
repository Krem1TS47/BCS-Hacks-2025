import React from 'react';

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
      <h2 className="text-lg font-medium mb-4">Something to encourage</h2>
      
      <div className="space-y-2 mb-6">
        <div className="space-y-1">
          <div className="flex items-center justify-between">          
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-200">
              <div className="h-3 bg-green-500 rounded-full" style={{ width: greenBar }}></div>
            </div>
            <span className='pl-4'>10</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between">          
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-200">
              <div className="h-3 bg-yellow-300 rounded-full" style={{ width: yellowBar }}></div>
            </div>
            <span className='pl-4'>20</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">          
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-200">
              <div className="h-3 bg-red-500 rounded-full" style={{ width: redBar }}></div>
            </div>
            <span className='pl-4'>50</span>
          </div>
        </div>

      </div>
      
      <div className="flex justify-end mb-8">
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <div className="h-16 border-dashed border-l-2 border-gray-400"></div>
          <p className="text-xs text-gray-500 max-w-xs text-right">Earn points to get badges</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="text-center mb-2">
          <p>Questions created: {numberQuestions}</p>
        </div>
        
        <button 
          onClick={() => startQuiz()} 
          type="button" 
          className='w-full rounded-full text-white font-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2'
        >
          Start quiz
        </button>
      </div>
    </div>
  )
};

export default PointsTracker;