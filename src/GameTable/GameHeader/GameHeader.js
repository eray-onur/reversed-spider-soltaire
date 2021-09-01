import React from 'react';
import Button from '../../Common/Components/Button/Button';
import './GameHeader.css';
import Scoreboard from './Scoreboard/Scoreboard';
import {withRouter} from 'react-router-dom';
import NicknameBoard from './NicknameBoard/NicknameBoard';
import Counter from './Counter/Counter';
import { useSelector } from 'react-redux';

const GameHeader = (props) => {
    const {hasWon} = useSelector(state => state.game);

    return (
        <header>
            <Button styleClasses={'btn-danger btn-flat btn-borderless'} onClick={() => props.history.goBack()}>{hasWon ? 'Finish' : 'Forfeit'} Game</Button>
            <NicknameBoard/>
            <div className="session-information">
                <Scoreboard/>
                <Counter/>
            </div>
        </header>
    );
};

export default withRouter(GameHeader);