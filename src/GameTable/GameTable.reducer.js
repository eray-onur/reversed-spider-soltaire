import { createSlice } from '@reduxjs/toolkit';
import ShuffleService from './Shuffle.service';

let initialState = {
    nickName: 'Default Player',
    hasWon: null,
    currentScore: 0,
    currentlySelected: {
        stackIndex: null,
        cards: []
    },
    currentDeck: [],
    spareStack: [],
    hint: {
        left: 3,
        cards: []
    },
}

// DUMMY - MUST BE REMOVED AFTER WIN STATE IS PLAY-PROOF!
let aboutToWinState = {
    nickName: 'Default Player',
    hasWon: null,
    currentScore: 0,
    hint: {
        left: 3,
        cards: []
    },
    currentlySelected: {
        stackIndex: null,
        cards: []
    },
    currentDeck: [
        {
            id: 1,
            stackGap: 40,
            stackIndex: 0,
            cards: [
                { id: 1, suit: 'club', rank: 'A', priority: 1, src: '/images/club-as.webp', active: true},
                { id: 2, suit: 'club', rank: '2', priority: 2, src: '/images/club-2.webp', active: true },
                { id: 3, suit: 'club', rank: '3', priority: 3, src: '/images/club-3.webp', active: true },
                { id: 4, suit: 'club', rank: '4', priority: 4, src: '/images/club-4.webp', active: true },
                { id: 5, suit: 'club', rank: '5', priority: 5, src: '/images/club-5.webp', active: true },
                { id: 6, suit: 'club', rank: '6', priority: 6, src: '/images/club-6.webp', active: true },
                { id: 7, suit: 'club', rank: '7', priority: 7, src: '/images/club-7.webp', active: true },
                { id: 8, suit: 'club', rank: '8', priority: 8, src: '/images/club-8.webp', active: true },
                { id: 9, suit: 'club', rank: '9', priority: 9, src: '/images/club-9.webp', active: true },
                { id: 10, suit: 'club', rank: '10', priority: 10, src: '/images/club-10.webp', active: true },
                { id: 11, suit: 'club', rank: 'J', priority: 11, src: '/images/club-J.webp', active: true },
                { id: 12, suit: 'club', rank: 'Q', priority: 12, src: '/images/club-Q.webp', active: true },
            ],
        },
        {
            id: 2,
            stackGap: 40,
            stackIndex: 1,
            cards: [
                { id: 13, suit: 'club', rank: 'K', priority: 13, src: '/images/club-K.webp', active: true },
            ],
        },
        {
            id: 3,
            stackGap: 40,
            stackIndex: 2,
            cards: [
                { id: 22, suit: 'club', rank: 'A', priority: 1, src: '/images/club-as.webp', active: true},
                { id: 23, suit: 'club', rank: '2', priority: 2, src: '/images/club-2.webp', active: true },
                { id: 24, suit: 'club', rank: '3', priority: 3, src: '/images/club-3.webp', active: true },
                { id: 25, suit: 'club', rank: '4', priority: 4, src: '/images/club-4.webp', active: true },
                { id: 26, suit: 'club', rank: '5', priority: 5, src: '/images/club-5.webp', active: true },
                { id: 27, suit: 'club', rank: '6', priority: 6, src: '/images/club-6.webp', active: true },
                { id: 28, suit: 'club', rank: '7', priority: 7, src: '/images/club-7.webp', active: true },
                { id: 29, suit: 'club', rank: '8', priority: 8, src: '/images/club-8.webp', active: true },
                { id: 30, suit: 'club', rank: '9', priority: 9, src: '/images/club-9.webp', active: true },
                { id: 31, suit: 'club', rank: '10', priority: 10, src: '/images/club-10.webp', active: true },
                { id: 32, suit: 'club', rank: 'J', priority: 11, src: '/images/club-J.webp', active: true },
                { id: 33, suit: 'club', rank: 'Q', priority: 12, src: '/images/club-Q.webp', active: true },
            ],
        },
        {
            id: 4,
            stackGap: 40,
            stackIndex: 3,
            cards: [
                { id: 17, suit: 'club', rank: 'K', priority: 13, src: '/images/club-K.webp', active: true },
            ],
        },
        {
            id: 5,
            stackGap: 40,
            stackIndex: 4,
            cards: [],
        },
        {
            id: 6,
            stackGap: 40,
            stackIndex: 5,
            cards: [],
        },
        {
            id: 7,
            stackGap: 40,
            stackIndex: 6,
            cards: [],
        },
        {
            id: 8,
            stackGap: 40,
            stackIndex: 7,
            cards: [],
        },
        {
            id: 9,
            stackGap: 40,
            stackIndex: 8,
            cards: [],
        },
        {
            id: 10,
            stackGap: 40,
            stackIndex: 9,
            cards: [],
        },
    ],
    spareStack: []
}

const shuffleService = new ShuffleService();

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        changeNickname(state, action) {
            state.nickName = action.payload;
        },
        determineScore(state, action) {
            state.currentScore += 25 * action.payload.cardRow;
            return state;
        },
        calculateVictoryState(state) {
            // For every stack in the deck (10), check if the cards ranks are reverse-sequential.
            state.currentDeck.forEach(d => {
                const sequentialCards = [];
                d.cards.forEach((c, index, array) => {
                    if((array[index + 1] && array[index + 1].priority - c.priority === 1) || index === array.length - 1) {
                        sequentialCards.push(c);
                    }
                });
                
                // If sequential card count is equal to every card in the game, dispose of them and add to player score.
                if(sequentialCards.length === 13) {
                    d.cards.splice(d.cards.findIndex(c => c.id === sequentialCards[0].id), d.cards.length);
                    state.currentScore += 500;
                }
            });
            // If no cards are left in any cardstack, YOU HAVE WON THE GAME!
            state.hasWon = state.currentDeck.every(s => s.cards.length === 0);
            return state;
        },
        // Shuffle the entire deck of cards.
        shuffleDeck(state) {
            state.hint = initialState.hint;
            state.hasWon = initialState.hasWon;
            state.currentDeck = initialState.currentDeck;
            state.currentScore = initialState.currentScore;
            state.spareStack.splice(0, state.spareStack.length);
            [state.currentDeck, state.spareStack] = shuffleService.shuffleCards();
            return state;
        },
        shuffleTestDeck(state) {
            state.hint = initialState.hint;
            state.hasWon = initialState.hasWon;
            state.currentDeck = aboutToWinState.currentDeck;
            state.currentScore = aboutToWinState.currentScore;
            state.spareStack.splice(0, state.spareStack.length);
        },
        addFromSpareStack(state) {
            [...Array(10)].forEach((_, i) => {
                if(state.spareStack.length > 0) {
                    const cardToAdd = state.spareStack.pop();
                    cardToAdd.active = true;
                    
                    state.currentDeck[i].cards.push(cardToAdd);
                }
            })
            return state;
        },
        // Selecting a card for moving.
        selectCard(state, action) {
            const deck = state.currentDeck;
            const currentlySelected = state.currentlySelected; // Latest selection
            const newCard = action.payload.model; // Current selection
            const stackIndex = action.payload.stackIndex; // Current selection's belonging stack.

            state.hint.cards = initialState.hint.cards; // Reset hint info.

            // If selected card is unavailable, current selection will be tracked.
            if(currentlySelected.cards.length === 0) {
                const cardIndex = deck[stackIndex].cards.findIndex(c => c.id === newCard.id);

                const sequentialCards = deck[stackIndex].cards
                .map((card, i) => (i >= cardIndex) ? card : null)
                .filter(card => card);

                if(sequentialCards.length > 1) {
                    currentlySelected.cards = sequentialCards.map((c,i,arr) => {
                        const nextItem = arr[i + 1];
                        const currentItem = arr[i];
                        const previousItem = arr[i-1];
                        if(nextItem) {
                            return (nextItem.priority - currentItem.priority === 1) ? currentItem : null;
                        } else if(previousItem) {
                            return (currentItem.priority - previousItem.priority  === 1) ? currentItem : null;
                        }
                    }).filter(c => c);
                } else {
                    currentlySelected.cards.push(sequentialCards[0]);
                }
                //currentlySelected.stackIndex = (state.currentlySelected !== currentlySelected) ? stackIndex : null;
                // State mutation
                currentlySelected.stackIndex = stackIndex;
                state.currentlySelected = currentlySelected;
                state.currentDeck = deck;
                return state;
            } else {
                const firstCard = currentlySelected.cards[0];
                // Validating whether if selected card's priority is higher.
                // If it is, then start replacing the previously selected cards into new stack.
                if(firstCard.priority - newCard.priority === 1) {
                    currentlySelected.cards.forEach(c => {
                        deck[stackIndex].cards.push(c);
                        state.currentScore += 20;
                    });
                    const cardIndexToDelete = deck[currentlySelected.stackIndex].cards.findIndex(c => currentlySelected.cards[0].id === c.id);
                    deck[currentlySelected.stackIndex].cards.splice(cardIndexToDelete, deck[currentlySelected.stackIndex].cards.length);
                }
                // State mutation
                state.currentDeck = deck;
                state.currentlySelected = {stackIndex: null, cards: []};
                state.currentDeck.map(s => {
                    if(s.cards.length > 0)
                        s.cards[s.cards.length - 1].active = true
                });
                return state;
            }
        },
        findCardsToHint(state) {
            // If no hints left, immediately cancel the action.
            if(state.hint.left <= 0)
                return;
            state.hint.cards = [...initialState.hint.cards];
            // Find two cards with sequential priorities
            // from the last cards of each stack
            const foundLastCards = [];

            state.currentDeck.forEach(s => {
                if(s.cards.length > 0)
                    foundLastCards.push(s.cards[s.cards.length - 1]);
            });
            foundLastCards.filter(c => c);

            // If there are any sequential cards, hint them!
            for(let index = 0; index < foundLastCards.length; index++) {
                
                if(foundLastCards[index + 1] && 
                    Math.abs(foundLastCards[index].priority - foundLastCards[index + 1].priority) === 1) {
                        state.hint.cards.push(foundLastCards[index]);
                        state.hint.cards.push(foundLastCards[index + 1]);
                        break;
                }
            }

            if(state.hint.cards.length > 0)
                state.hint.left--;

            return state;
        }
    }
});

export const { 
    changeNickname, 
    determineScore, 
    calculateVictoryState, 
    shuffleDeck, shuffleTestDeck, 
    selectCard, 
    addFromSpareStack, 
    findCardsToHint } = gameSlice.actions;
export default gameSlice.reducer;