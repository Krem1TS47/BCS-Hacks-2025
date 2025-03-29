import React, { useState } from "react";


const QuizQuestion = ({ question, answer_1, answer_2, answer_3, answer_4, points, correct_index, onAnswerSelected }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleChange = (event) => { 
        setSelectedOption(event.target.value); 
    }

    const handleSubmit = () => { 
        setIsAnswered(true); 
        if (selectedOption === getAnswer(correct_index)) { 
            setPoint(points); 
        }
    }    

    const getAnswer = (index) => { 
        switch (index) {
            case 0:
                return answer_1;
            case 1:
                return answer_2;
            case 2:
                return answer_3;
            case 3:
                return answer_4;
            default:
                return '';
        }
    }
}

export default QuiZQuestion; 

