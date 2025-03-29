import logo from './logo.svg';
import { CiMedal } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import './App.css';

function BadgePoints() {
  return (
    <div className="header">
        <div className="user-info">
          <span className="name">Name</span>
          <div className="badges">
            <div className="badge"></div>
            <div className="badge"></div>
            <div className="badge"></div>
          </div>
        </div>
        <div className="points-container">
          <FaStar className="star-icon" />

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

function ProgressBar() {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: "50%" }}></div>
    </div>
  );
}

function ProgressSection() {
  return (
    <div className="progress-section">
      <h2>Progress</h2>
      <ProgressBar />
      <ProgressBar />
      <ProgressBar />
    </div>
  );
}

function StartQuiz() {
  return (
    <div>
      <button className="start-quiz">Start Quiz</button>
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
      <ProgressSection />
      <StartQuiz />
    </>
  );
}