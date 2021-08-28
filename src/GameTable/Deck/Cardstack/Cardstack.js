import React from 'react';
import './Cardstack.css';
// import { useDrop } from 'react-dnd'

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