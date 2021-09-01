import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { findCardsToHint } from '../GameTable.reducer';


import './Hint.css';

const Hint = () => {
    const { hint, hasWon } = useSelector(state => state.game);

    const notify = () => toast.warn('No hints left!');

    const dispatch = useDispatch();

    return (
        <div className="hint" style={hasWon ? {pointerEvents: "none", opacity: "0.4"} : {}} onClick={() => {
            if(hasWon)
                return;
            if(hint.left > 0)
                dispatch(findCardsToHint());
            else {
                notify();
            }
        }}>
            <span className="material-icons">info</span>
        </div>
    );
}

export default Hint;