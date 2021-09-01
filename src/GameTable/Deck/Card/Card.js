import React, { useEffect, useState } from 'react';
import {useDrag} from 'react-dnd';
import { useSelector } from 'react-redux';
import './Card.css';
import { 
    STYLE_HINTED_CARD,
    STYLE_IDLE_CARD, 
    STYLE_SELECTED_CARD 
} from './Constants';

const Card = ({model, style, onSelect}) => {
    let [isSelected, setIsSelected] = useState(false);
    let [isHintedAt = false, setIsHintedAt] = useState();
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
        if(hint.cards.find(c => c.id === model.id) !== undefined) {
            setIsHintedAt(true);
        }
        else setIsHintedAt(false);
    }, [hint.cards.length]);

    return (
        <li className={`game-card`}
            onClick={() => onSelect()}
            style={{...style, 
                opacity: isDragging ? '0' : '1', 
                border: isSelected 
                    ? STYLE_SELECTED_CARD
                    : (isHintedAt === true 
                        ? STYLE_HINTED_CARD 
                        : STYLE_IDLE_CARD)}}>
            <img className="game-card-image" src={model.src} alt="card" />
            <p>{isHintedAt}</p>
        </li>
    );
}

export default Card;