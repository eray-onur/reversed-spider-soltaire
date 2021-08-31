import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateVictoryState } from './../../GameTable.reducer';
import './Cardstack.css';

const Cardstack = ({children, stackIndex}) => {
    const {currentDeck} = useSelector(state => state.game);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateVictoryState());
    }, [currentDeck[stackIndex].cards.length])
    return (
        <ul className={"card-stack"}>
            {children}
        </ul>
    );
};

export default Cardstack;