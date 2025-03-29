import React from 'react';

const StatusBar = ({ 
  message
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p>{message}</p>
    </div>
  );
};
export default StatusBar;