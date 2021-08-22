import { createSlice } from '@reduxjs/toolkit';
import CardService from './Card.service';

const initialState = {
    currentPoints: 0,
    currentlySelectedCard: null,
    currentDeck: [

    ],
    spareStack: [

    ]
}

const cardService = new CardService();

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // Increases player score.
        increasePoint(state, action) {
            state.userName = action.payload;
        },
        // Decreases player score.
        decreasePoint(state, action) {
            state.currentPoints = action.payload;
        },
        // Shuffle the entire deck of cards.
        shuffleDeck(state, action) {
            state.currentDeck = cardService.shuffleCards();
        },
        // Selecting a card for moving.
        selectCard(state, action) {
            // If selected card is unavailable, current selection will be tracked.
            if(state.currentlySelectedCard === null) {
                state.currentlySelectedCard = action.payload;
            }
            // Validating whether if selected card's priority is higher.
            // If it is higher, place the currently selected card to the new stack.
            // Also calculate the points earned by player if there's a complete set of card rows.


            // If not, cancel the currently selected card.
        },
    }
});

export const {increasePoint, decreasePoint, shuffleDeck, selectCard} = gameSlice.actions;
export default gameSlice.reducer;