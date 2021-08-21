import React from 'react';
import {useDrag} from 'react-dnd';
import './Card.css';

function getId() {
    return String(Math.random() * 1000);
}

const Card = ({model, style}) => {
    const [{opacity, isDragging}, dragRef] = useDrag(
        () => ({
            type: 'card',
            collect: monitor => ({
                isDragging: !!monitor.isDragging()
            })
        })
    );

    const id = getId();
    return (
        <li className="game-card"
            style={{...style, opacity: isDragging ? '0.25' : '1'}}>
            <img className="game-card-image" src={model.src} alt="card" />
        </li>
    );
}

export default Card;