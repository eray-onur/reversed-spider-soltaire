import React from 'react';
import {useDrag} from 'react-dnd';
import { useDispatch } from 'react-redux';
import { selectCard } from '../../GameTable.reducer';
import './Card.css';

const Card = ({model, style, stackIndex}) => {

    // const {selectCard} = useSelector(state => state.game);
    const dispatch = useDispatch();


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
            onClick={() => dispatch(selectCard({model, stackIndex}))}
            style={{...style, opacity: isDragging ? '0.25' : '1'}}>
            <img className="game-card-image" src={model.src} alt="card" />
        </li>
    );
}

export default Card;