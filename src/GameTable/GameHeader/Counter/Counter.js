import React, { useState, useEffect } from 'react';
import './Counter.css';

const formatSeconds = (seconds) => {
    return seconds;
};
formatSeconds(); // Dummy until added to component properly.

const Counter = () => {

    let [passedSeconds, setPassedSeconds] = useState(0);
    let [timerId, setTimerId] = useState(null);

    // Manages the side effect of kickstarting and unmounting the timer task
    useEffect(() => {
        setTimerId(
            setInterval(() => {
                setPassedSeconds(passedSeconds++);
            }, 1000)
        );

        return () => {
            clearInterval(timerId);
            setTimerId(null);
        }
    }, []);


    return (
        <div className="counter">
            {passedSeconds}
        </div>
    );

}

export default Counter;