import React from 'react';
import { useSelector } from 'react-redux';
import './Scoreboard.css';

const Scoreboard = () => {
    const {currentScore} = useSelector(state => state.game);
    // const dispatch = useDispatch();


    return (
        <div className="scoreboard">
            <h2 className={'scoreboard-points' + (currentScore >= 500 ?? 'high-points')}>{currentScore.toString()}</h2>
        </div>
    );
}

export default Scoreboard;