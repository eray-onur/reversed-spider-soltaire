import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Page from '../Common/Layouts/Page';
import GameHeader from './GameHeader/GameHeader';
import Cardstack from './Deck/Cardstack/Cardstack';
import Card from './Deck/Card/Card';
import Deck from './Deck/Deck';
import { shuffleTestDeck, selectCard } from './GameTable.reducer';
import './GameTable.css';
import Sparestack from './Sparestack/Sparestack';
import Hint from './Hint/Hint';

const GameTable = () => {
    const {currentDeck, hasWon} = useSelector(state => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shuffleTestDeck());

    }, []);

    useEffect(() => {
        if(hasWon)
            alert('You have won the game!');
    }, [hasWon]);

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
                classes={'gametable-page'}
            >
                <GameHeader/>
                <Deck>
                    {currentDeck.map((stack, i) => (
                        <Cardstack key={stack.id} stackIndex={i}>
                            {stack.cards.map((c, cardIndex) => {
                                let cardHeight = (stack.cards.indexOf(c)) * stack.stackGap;
                                return (
                                    <Card
                                        key={c.id}
                                        model={c}
                                        stackIndex={currentDeck.indexOf(stack)}
                                        cardIndex={cardIndex}
                                        onSelect={() => dispatch(selectCard({model: c, stackIndex: i}))}
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
                <Hint/>
            </Page>
        </DndProvider>
    );
}

export default GameTable;