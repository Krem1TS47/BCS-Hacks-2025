const QuizPlatformLogo = () => {
    return (
        <div className="pl-5">
        <div className="relative w-32 h-24 bg-blue-600 rounded-xl shadow-lg flex items-center justify-center">
          {/* Question Mark */}
          <svg viewBox="0 0 75 100" className="w-20 h-20">
            <path 
              d="M50 20 C60 20, 70 25, 70 40 C70 55, 60 60, 50 60 L50 75" 
              stroke="white" 
              strokeWidth="8" 
              strokeLinecap="round" 
              fill="none" 
            />
            <circle cx="50" cy="85" r="4" fill="white" />
          </svg>
          
          {/* Quiz Elements (left side) */}
          <div className="absolute left-3 top-3 space-y-4">
            <div className="h-1.5 w-8 bg-white rounded-full opacity-70"></div>
            <div className="h-1.5 w-10 bg-white rounded-full opacity-70"></div>
            <div className="h-1.5 w-9 bg-white rounded-full opacity-70"></div>
            <div className="h-1.5 w-12 bg-white rounded-full opacity-70"></div>
          </div>
          
          {/* Answer Marks (right side) */}
          <div className="absolute right-1 top-2 space-y-4">
            {/* Checkmark */}
            <svg viewBox="0 0 40 40" className="w-8 h-8">
              <path 
                d="M10 20 L17 27 L30 14" 
                stroke="#72FFB6" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none" 
              />
            </svg>
            
            {/* X Mark */}
            <svg viewBox="0 0 40 40" className="w-8 h-8">
              <path 
                d="M10 10 L30 30 M30 10 L10 30" 
                stroke="#FF7272" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>
        </div>
    );
  };
  
  export default QuizPlatformLogo;