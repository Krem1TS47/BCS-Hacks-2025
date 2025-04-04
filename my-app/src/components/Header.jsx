import QuizioLogo from "./QuizioLogo"; 
import { FaStar } from "react-icons/fa";

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
      <div className="flex items-center gap-2">
        <span className="text-yellow-300">
          <FaStar size={24}/>
        </span>
        <span className="font-medium">Points {points}</span>
      </div>
    </span>
  )
}