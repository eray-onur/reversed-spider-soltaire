import React, { useState } from 'react';
import {useDrag} from 'react-dnd';
// import { useSelector } from 'react-redux';
import './Card.css';

const Card = ({model, style, onSelect}) => {
    const [isSelected] = useState(false);
    // const {currentlySelected} = useSelector(state => state.game);

    const [{isDragging}] = useDrag(
        () => ({
            type: 'card',
            collect: monitor => ({
                isDragging: !!monitor.isDragging()
            })
        })
    );

    return (
        <li className="game-card"
            onClick={() => onSelect()}
            style={{...style, opacity: isDragging ? '0' : '1', border: isSelected ? '4px solid lightgreen' : 'none'}}>
            <img className="game-card-image" src={model.src} alt="card" />
        </li>
    );
}

export default Card;