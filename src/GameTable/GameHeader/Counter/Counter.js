import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Counter.css';

const formatSeconds = (seconds) => {
    if(seconds > 59) {
        let minutes = Math.floor(seconds / 60).toFixed(0);
        let remainingSeconds = Math.abs(seconds - (minutes * 60)).toFixed(0);

        if(minutes.length <= 1)
            minutes = `0${minutes}`;
        if(remainingSeconds.length <= 1)
            remainingSeconds = `0${remainingSeconds}`;

        return `${minutes}:${remainingSeconds}`;
    }
    return seconds.toString();
};

const Counter = () => {
    const {hasWon} = useSelector(state => state.game);

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

    useEffect(() => {
        if(hasWon) {
            clearInterval(timerId);
            setTimerId(null);
        }
    }, [hasWon])


    return (
        <div className="counter">
            {formatSeconds(passedSeconds)}
        </div>
    );

}

export default Counter;