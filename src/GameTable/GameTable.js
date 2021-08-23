import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Page from '../Common/Layouts/Page';
import Cardstack from './Deck/Cardstack/Cardstack';
import Card from './Deck/Card/Card';
import Deck from './Deck/Deck';
import { shuffleDeck } from './GameTable.reducer';
import './GameTable.css';
import Sparestack from './Deck/Sparestack/Sparestack';

const GameTable = () => {
    const {currentDeck} = useSelector(state => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shuffleDeck());
    }, []);

    return (
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
                <Deck>
                    {currentDeck.map(stack => (
                        <Cardstack key={stack.id}>
                            {stack.cards.map(c => {
                                let cardHeight = (stack.cards.indexOf(c)) * 40;
                                return (
                                    <Card
                                        key={c.id}
                                        model={c}
                                        stackIndex={currentDeck.indexOf(stack)}
                                        style={{
                                            'zIndex': '1',
                                            'top': (stack.cards.length === 0 ? '0' : cardHeight)
                                        }}
                                    />
                                )
                            })}
                        </Cardstack>
                    ))}
                </Deck>
                <Sparestack></Sparestack>
            </Page>
        </DndProvider>
    );
}

export default GameTable;