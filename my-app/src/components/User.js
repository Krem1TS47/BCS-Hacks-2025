import React, { useState } from "react";


const User = ({}) => { 

    const [points, setPoints] = useState(0) ; 

    const updatePoints  = (point) => { 
        setPoints(prevPoints => prevPoints + point); 
    }
}