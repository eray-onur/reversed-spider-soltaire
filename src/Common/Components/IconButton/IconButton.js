import React from 'react';
import Button from '../Button';
import './IconButton.css';

const IconButton = ({icon = '#', text = ''}) => {
    return (
        <Button>
            <p>{text}</p>
        </Button>
    );
};

export default IconButton;