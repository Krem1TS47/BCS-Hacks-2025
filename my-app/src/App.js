import './App.css';
import QuizCreator from './components/QuizCreator'
import TestMain from './components/TestMain'
import React, { useState } from 'react';
import Header from './components/Header';

export default function App() {
  const [open, setOpen] = useState(true);
  const [points, setPoints] = React.useState(5);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header points={points} />
      {
        open? (
          <QuizCreator />
        ) : (
          <TestMain />
        )
      } 
    </div>
    
  )
}
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