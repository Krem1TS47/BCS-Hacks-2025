import logo from './logo.svg';
import './App.css';
import QuizCreator from './components/QuizCreator'

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
