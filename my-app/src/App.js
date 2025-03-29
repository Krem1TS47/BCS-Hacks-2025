import logo from './logo.svg';
import { CiMedal } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import './App.css';



function BadgePoints() {
    return (
        <div className="badge-container">
            <div className="badges">
                <CiMedal className="icon" />
                <CiMedal className="icon" />
                <CiMedal className="icon" />
            </div>
            <div className="points-container">
                <FaStar className="star" />
                <span className="points">120</span>
            </div>
        </div>
    );
}



function AddQuestion() {
    return (
        <div className="square">
            <h2>Add Question</h2>
            <div className="titlerow">
            <h2>Enter Possible Answers:</h2>
            <h2>Select Correct:</h2>
            </div>
            <button className="add-question">Add Question</button>
        </div>
    );
}



export default function App() {
    return (
        <>
        <div className="row">
            <h2 className="app-title">Application Name</h2>
            <BadgePoints />
        </div>
        <AddQuestion />
        </>
    );
}