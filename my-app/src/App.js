import logo from './logo.svg';
import { CiMedal } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import './App.css';



function BadgePoints() {
    return (
        <div className="header">
            <div className="left-content">

                <div className="badges">
                    <CiMedal className="icon" />
                    <CiMedal className="icon" />
                    <CiMedal className="icon" />
                </div>
            </div>
            <div className="right-content">
                <FaStar className="star" />
                <span className="points">120</span>
            </div>
        </div>
    );
}



export default function App() {
    return (
        <div className="header">
            <h1>Application Name</h1>
            <BadgePoints />
        </div>
    );
}
