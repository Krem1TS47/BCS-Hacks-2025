
import QuizioLogo from "./QuizioLogo";

export default function Header({
  points
}) {
  return (
    <span className="flex justify-between items-center p-4 border-b bg-white">
      <span className="flex items-center gap-2">
        <span className="text-6xl">QUIZIO</span>
        <div className="flex gap-1">
          <QuizioLogo/>
        </div>

      </span>
      <div className="flex items-center gap-2 text-lg font-medium p-2">
      {/* Star Icon */}
      <svg 
        className="w-6 h-6 text-yellow-500 flex-shrink-0" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      
      {/* Text */}
      <span>Points {points}</span>

      </div>


    </span>
  )
}