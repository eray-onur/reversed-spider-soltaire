import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Modal from 'react-modal';
import Page from '../Common/Layouts/Page';
import GameHeader from './GameHeader/GameHeader';
import Cardstack from './Deck/Cardstack/Cardstack';
import Card from './Deck/Card/Card';
import Deck from './Deck/Deck';
import { shuffleDeck, selectCard } from './GameTable.reducer';
import './GameTable.css';
import Sparestack from './Sparestack/Sparestack';
import Hint from './Hint/Hint';
import Button from '../Common/Components/Button/Button';

const victoryModalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#777',
      display: 'flex',
      flexDirection: 'column',
      gap: '5rem'
    },
};

const GameTable = ({history}) => {
    const dispatch = useDispatch();
    
    const {nickName, currentScore, currentDeck, hasWon} = useSelector(state => state.game);
    const [victoryModalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        if(nickName !== 'Default Player')
            dispatch(shuffleDeck());
        else history.push('/');
    }, []);

    useEffect(() => {
        if(hasWon)
            openModal();
        else closeModal();
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
                <Modal
                    isOpen={victoryModalIsOpen}
                    onRequestClose={closeModal}
                    style={victoryModalStyle}
                    contentLabel="Tutorial"
                >
                    <h4 className="victory-heading"><span className="material-icons">emoji_events</span><span>Congratulations, <i className='nickname-highlight'>{nickName}</i> !</span></h4>
                    <p className="victory-text">You have won the game with a score of: <i className='nickname-highlight'>{currentScore}</i></p>
                    <Button onClick={() => closeModal()}>Close</Button>
                </Modal>
            </Page>
        </DndProvider>
    );
}

export default GameTable;