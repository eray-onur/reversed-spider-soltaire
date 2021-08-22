import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Page from '../Common/Page';
import Cardstack from './Deck/Cardstack/Cardstack';
import Card from './Deck/Card/Card';
import Deck from './Deck/Deck';
import { shuffleDeck } from './GameTable.reducer';
import './GameTable.css';

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
                    {(() => {
                        if(currentDeck.length !== 0) {
                            return currentDeck.map(stack => (
                                <Cardstack key={(Math.random() * 10)}>
                                    {stack.cards.map(c => {
                                        let cardHeight = (stack.cards.indexOf(c)) * 40;
                                        return (
                                            <Card
                                                key={c.rank + (Math.random() * 10)}
                                                model={c}
                                                stackIndex={currentDeck.indexOf(stack)}
                                                style={{
                                                    'zIndex': '1',
                                                    'top': (stack.cards.length === 0 ? '0' : cardHeight)
                                                }}
                                                onClick={() => console.log(c.rank)}
                                            />
                                        )
                                    })}
                                </Cardstack>
                            ));
                        } else {
                            return <p>No cards available in the deck. Please reload the game.</p>
                        }
                    })()}
                </Deck>
                <Cardstack>

                </Cardstack>
            </Page>
        </DndProvider>
    );
}

export default GameTable;