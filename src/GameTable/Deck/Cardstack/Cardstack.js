import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Cardstack.css';

const Cardstack = ({children, stackIndex}) => {
    const {currentDeck} = useSelector(state => state.game);
    useEffect(() => {
        //const sequentialCards = [...currentDeck[stackIndex].cards].reverse();
    }, [currentDeck[stackIndex].cards.length])
    return (
        <ul className={"card-stack"}>
            {children}
        </ul>
    );
};

export default Cardstack;