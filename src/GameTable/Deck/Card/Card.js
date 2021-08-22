import React, { useEffect } from 'react';
import {useDrag} from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import './Card.css';

const Card = ({model, style, stackIndex}) => {

    const {selectCard} = useSelector(state => state.game);
    const dispatch = useDispatch();


    const [{opacity, isDragging}, dragRef] = useDrag(
        () => ({
            type: 'card',
            collect: monitor => ({
                isDragging: !!monitor.isDragging()
            })
        })
    );

    return (
        <li className="game-card"
            onClick={() => selectCard({payload: {model, stackIndex}})}
            style={{...style, opacity: isDragging ? '0.25' : '1'}}>
            <img className="game-card-image" src={model.src} alt="card" />
        </li>
    );
}

export default Card;