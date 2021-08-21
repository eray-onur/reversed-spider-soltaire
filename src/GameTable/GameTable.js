import React from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { GameContext } from './Game.context';
import GameService from './Card.service';
import Page from '../Common/Page';
import Cardstack from './Deck/Cardstack/Cardstack';
import Card from './Deck/Card/Card';
import Deck from './Deck/Deck';
import './GameTable.css';
import GameHeader from './GameHeader/GameHeader';
import GameFooter from './GameFooter/GameFooter';

const gameService = new GameService();

const DefaultDeckLayout = (props) => {
    return (
        <p>A</p>
    );
}

const GameTable = (props) => {
    return (
    <GameContext.Provider>
        <DndProvider backend={HTML5Backend}>
            <Page
                pageVariants={{
                    in: {
                        opacity: 1,
                        x: 0
                    },
                    out: {
                        opacity: 0,
                        x: '-100vw'
                    }
                }}
                pageTransition={{
                    duration: 0.35,
                    transition: 'linear'
                }}
            >
                <GameHeader/>
                <Deck>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('6')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('6')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('6')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('6')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('5')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('5')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('5')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('5')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('5')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                    <Cardstack>
                        <Card model={gameService.getCardByValue('5')} style={{'zIndex': '1', 'top': '0'}}/>
                    </Cardstack>
                </Deck>
                <GameFooter/>
            </Page>
        </DndProvider>
    </GameContext.Provider>
    );
}

export default GameTable;