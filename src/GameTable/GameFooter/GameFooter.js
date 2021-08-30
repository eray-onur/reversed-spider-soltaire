import React from 'react';
import Button from './../../Common/Components/Button/Button';
import './GameFooter.css';
import Scoreboard from './Scoreboard/Scoreboard';
import {withRouter} from 'react-router-dom'
const GameFooter = (props) => {
    return (
        <footer>
            <Button styleClasses={'btn-danger'} onClick={() => props.history.goBack()}>Forfeit Game</Button>
            <Scoreboard/>
        </footer>
    );
};

export default withRouter(GameFooter);