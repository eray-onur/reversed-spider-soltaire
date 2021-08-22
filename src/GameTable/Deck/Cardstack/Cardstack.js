import React from 'react';
import { useDrop } from 'react-dnd'
import './Cardstack.css';

const Cardstack = (props) => {
    // const [collectedProps, drop] = useDrop(() => ({
        
    // }));
    return (
        <ul className={"card-stack"}>
            {props.children}
        </ul>
    );
};

export default Cardstack;