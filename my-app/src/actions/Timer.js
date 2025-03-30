import React from 'react';
import {useState, useEffect} from 'react';

const timeLimit = 20;
const Timer = ({reset}) => {
    const [seconds, setSeconds] = useState(timeLimit);

    useEffect(() => {
        setSeconds(timeLimit);
    }, [reset]);


    useEffect(() => {
        if (seconds > 0) {
           const interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
           }, 1000);

           return () => clearInterval(interval);
        }
    }, [seconds])

    return (
        <div className = "timer  text-lg font-bold text-gray-700"> 
            {/*Time left: {seconds} seconds*/}
            {seconds} seconds
        </div>
    )
}

export default Timer;