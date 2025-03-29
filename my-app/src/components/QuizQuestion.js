import React, { useState } from "react";


const QuizQuestion = ({ question, options, points, correctAnswer, onAnswerSelected }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);


    const handleChange = (event) => { 
        setSelectedOption(EventTarget.target.value); 
    }

    const handleSubmit = () => { 
        setIsAnswered(true); 
        if (selectedOption === correctAnswer) { 
            setPoint(points); 
        }
    }    
}

export default QuiZQuestion; 

