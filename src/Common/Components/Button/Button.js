import React from 'react';
import './Button.css';

const Button = ({type, children, onClick = () => {}, styleClasses = []}) => {
    return (
        <button 
            type={type} 
            onClick={() => onClick()} 
            className={['btn', styleClasses].join(' ')}>{children}</button>
    );
}

export default Button;