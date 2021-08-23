import { createSlice, current } from '@reduxjs/toolkit';
import CardService from './Card.service';
import CardModel from './Deck/Card/Card.model';

const initialState = {
    currentPoints: 0,
    currentlySelected: {
        stackIndex: null,
        cards: []
    },
    currentDeck: [],
    spareStack: []
}

const cardService = new CardService();

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // Increases player score.
        determineScore(state, action) {
            state.userName = action.payload;
        },
        // Shuffle the entire deck of cards.
        shuffleDeck(state, action) {
            [state.currentDeck, state.spareStack] = cardService.shuffleCards();
            return state;
        },
        resetDeck(state) {
            state = initialState;
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
            const newState = state;
            const deck = state.currentDeck;
            const currentlySelected = state.currentlySelected; // Latest selection
            const newCard = action.payload.model; // Current selection
            const stackIndex = action.payload.stackIndex; // Current selection's belonging stack.

            console.log(stackIndex);

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
                    currentlySelected.cards.forEach(c => deck[stackIndex].cards.push(c));
                    const cardIndexToDelete = deck[currentlySelected.stackIndex].cards.findIndex(c => currentlySelected.cards[0].id === c.id);
                    deck[currentlySelected.stackIndex].cards.splice(cardIndexToDelete, deck[currentlySelected.stackIndex].cards.length);
                }
                // State mutation
                state.currentDeck = deck;
                state.currentlySelected = {stackIndex: null, cards: []};
                return state;
            }
        },
    }
});

export const {determineScore, shuffleDeck, selectCard, addFromSpareStack} = gameSlice.actions;
export default gameSlice.reducer;