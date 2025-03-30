import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import fetchPoints from './actions/fetchPoints';
import fetchQuestions from './actions/fetchQuestions.js';
import './App.css';
import Header from './components/Header';
import QuizCreator from './components/QuizCreator';
import Shop from './components/Shop'; // Import the Shop page
import TestMain from './components/TestMain';

export default function App() {
  const [open, setOpen] = useState(true);
  const [points, setPoints] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(1);

  React.useEffect(() => {
    getQuestions();
    getPoints();
  }, []);

  async function getQuestions() {
    const questionData = await fetchQuestions();
    console.log("questionsData " + JSON.stringify(questionData, null, 2));
    setQuestions(questionData);
  }

  async function getPoints() {
    const pointsData = await fetchPoints();
    console.log("pointsData: " + pointsData);
    setPoints(pointsData);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header points={points} />
      {
        open? (
          <QuizCreator 
            setOpen={setOpen} 
            points={points} 
            questions={questions} 
            setCurrentIndex={setCurrentIndex}
            onAddQuestion={getQuestions}
          />
        ) : (
          <TestMain 
            getPoints={getPoints}
            setOpen={setOpen} 
            questions={questions}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}  
          />
        )
      } 
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-500">
          <div className="flex justify-center mt-4">
            <Link to="/shop">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">
                Open Shop
              </button>
            </Link>
          </div>

          <Routes>
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </Router>
    </div>
    
  )
}


// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <QuizCreator />
        
//         {/* Button to navigate to Shop */}
//         <div className="flex justify-center mt-4">
//           <Link to="/shop">
//             <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">
//               Go to Shop
//             </button>
//           </Link>
//         </div>

//         <Routes>
//           <Route path="/shop" element={<Shop />} />
//         </Routes>
//       </div>

//       <div></div>
//     </Router>
//   );
// >>>>>>> 59b7c9dbb7f50fb5c4d02c8f7356ff72142c24ec
// import Supabase from './Supabase';
// import Home from './components/Home'
// import logo from './logo.svg';
// import { CiMedal } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
// import './App.css';


// function BadgePoints() {
//     return (
//         <div className="badge-container">
//             <div className="badges">
//                 <CiMedal className="icon" />
//                 <CiMedal className="icon" />
//                 <CiMedal className="icon" />
//             </div>
//             <div className="points-container">
//                 <FaStar className="star" />
//                 <span className="points">120</span>
//             </div>
//         </div>
//     );
// >>>>>>> 7b42bad844e5a6da37339f128af129bbed93d854
// }
// function BadgePoints() {
//   return (
//     <div className="header">
//         <div className="user-info">
//           <span className="name">Name</span>
//           <div className="badges">
//             <div className="badge"></div>
//             <div className="badge"></div>
//             <div className="badge"></div>
//           </div>
//         </div>

//         <div className="points-container">
//           <FaStar className="star-icon" />

//         </div>
//       </div>
//   );
// }



// function AddQuestion() {
//   return (
//     <div className="square">
//       <h2>Add Question</h2>
//       <div className="titlerow">
//         <h2>Enter Possible Answers:</h2>
//         <h2>Select Correct:</h2>
//       </div>
//       <button className="add-question">Add Question</button>
//     </div>
//   );
// }

// function ProgressBar() {
//   return (
//     <div className="progress-bar">
//       <div className="progress" style={{ width: "50%" }}></div>
//     </div>
//   );
//     );
// }
// >>>>>>> main

// // function AddQuestion() {
// //     return (
// //         <div className="square">
// //             <Home />
// //             <h2>Add Question</h2>
// //             <div className="titlerow">
// //             <h2>Enter Possible Answers:</h2>
// //             <h2>Select Correct:</h2>
// //             </div>
// //             <button className="add-question">Add Question</button>
// //         </div>
// //     );
// // }

// function ProgressSection() {
//   return (
//     <div className="progress-section">
//       <h2>Progress</h2>
//       <ProgressBar />
//       <ProgressBar />
//       <ProgressBar />
//     </div>
//   );
// }

// function StartQuiz() {
//   return (
//     <div>
//       <button className="start-quiz">Start Quiz</button>
//     </div>
//   );
// }

// // export default function App() {
// //     return (
// //         <>
// //         <div className="row">
// //             <h2 className="app-title">Application Name</h2>
// //             <BadgePoints />
// //         </div>
// //         <AddQuestion />
// //         </>
// //     );
// // }
// export default function App() {
//   return (
//     <>
//       <div className="row">
//         <h2 className="app-title">Application Name</h2>
//         <BadgePoints />
//       </div>
//       <AddQuestion />
//       <ProgressSection />
//       <StartQuiz />
//     </>
//   );
// }