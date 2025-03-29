import { FaStar } from "react-icons/fa";
import { FaTrophy, FaMedal } from "react-icons/fa6";
import { GiCutDiamond } from "react-icons/gi";

export default function Header({
  points
}) {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">
      <div className="flex items-center gap-2">
        <span className="font-medium">Name</span>
        <div className="flex gap-1">
          <span className="text-green-500">
            <FaTrophy size={24}/>
          </span>
          <span className="text-yellow-300">
            <FaMedal size={24}/>
          </span>
          <span className="text-red-500">
            <GiCutDiamond size={24}/>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-yellow-300">
          <FaStar size={24}/>
        </span>
        <span className="font-medium">Points {points}</span>
      </div>
    </div>
  )
}