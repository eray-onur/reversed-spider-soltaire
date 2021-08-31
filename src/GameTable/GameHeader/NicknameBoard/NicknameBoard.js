import React from 'react';
import { useSelector } from 'react-redux';
import './NicknameBoard.css';


const NicknameBoard = () => {
    const {nickName} = useSelector(state => state.game);
    return (
        <div className="nickname-indicator">
            <p className="nickname-label">Player:</p>
            <p className="nickname-value">{nickName}</p>
        </div>
    )
}

export default NicknameBoard;