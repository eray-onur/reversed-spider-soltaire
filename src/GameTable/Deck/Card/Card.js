import React, { useEffect, useState } from 'react';
import {useDrag} from 'react-dnd';
import { useSelector } from 'react-redux';
import './Card.css';

const Card = ({model, style, onSelect}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isHintedAt, setIsHintedAt] = useState(false);
    const {currentlySelected, hint} = useSelector(state => state.game);

    const [{isDragging}] = useDrag(
        () => ({
            type: 'card',
            collect: monitor => ({
                isDragging: !!monitor.isDragging()
            })
        })
    );

    useEffect(() => {
        if(currentlySelected.cards.find(c => c.id === model.id)) {
            setIsSelected(true);
        } else setIsSelected(false);
    }, [currentlySelected.cards]);

    useEffect(() => {
        // If hinted at, set state.
        if(hint.cards.find(c => c.id === model.id))
            setIsHintedAt(true);
        else setIsHintedAt(false);
    }, [hint.cards]);

    return (
        <li className={`game-card ${isHintedAt ? 'hinted-card' : ''}`}
            onClick={() => onSelect()}
            style={{...style, 
                opacity: isDragging ? '0' : '1', 
                border: isSelected ? '2px solid lightgreen' : 'none'}}>
            <img className="game-card-image" src={model.src} alt="card" />
        </li>
    );
}

export default Card;