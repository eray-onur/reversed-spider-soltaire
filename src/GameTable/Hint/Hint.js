import React from 'react';
import { useSelector } from 'react-redux';
import './Hint.css';

const Hint = () => {
    const {hint} = useSelector(state => state.game);
    return (
        <div className="hint" onClick={() => console.log('Giving hint!!')}>
            <p>{hint.left}</p>
        </div>
    );
}

export default Hint;