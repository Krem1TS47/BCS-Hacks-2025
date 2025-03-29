import React from 'react';

const PointsTracker = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium mb-4">Something to encourage</h2>
      
      <div className="space-y-4 mb-6">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="w-32 h-4 bg-green-500 rounded-full"></div>
            <span>10</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="w-20 h-4 bg-yellow-500 rounded-full"></div>
            <span>20</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="w-12 h-4 bg-red-500 rounded-full"></div>
            <span>50</span>
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
          <p>Question created: 10</p>
        </div>
        
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
          Start quiz
        </button>
      </div>
    </div>
  );
};

export default PointsTracker;