import { createSlice, current } from '@reduxjs/toolkit';
import CardService from './Card.service';
import CardModel from './Deck/Card/Card.model';

const initialState = {
    currentPoints: 0,
<<<<<<< Updated upstream
    currentlySelectedCard: null,
    currentDeck: [

    ],
    spareStack: [

    ]
=======
    currentlySelected: {
        stackIndex: null,
        cards: []
    },
    currentDeck: [],
    spareStack: []
>>>>>>> Stashed changes
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
        resetDeck(state) {
            state = initialState;
        },
<<<<<<< Updated upstream
=======
        addFromSpareStack(state) {
            //Add cards from spare to the deck.
            [...Array(10)].forEach((_, i) => {
                if(state.spareStack.length > 0) {
                    const cardToAdd = state.spareStack.pop();
                    cardToAdd.active = true;
                    state.currentDeck[i].cards.push(cardToAdd);
                }
            })
            return state;
        },
>>>>>>> Stashed changes
        // Selecting a card for moving.
        selectCard(state, action) {

<<<<<<< Updated upstream
            // If the selected element is not the last item, action will not be executed!
            if(state.currentDeck[action.payload.stackIndex].cards
                .find(c => c.id === action.payload.model.id) > -1) {
                return;
            }

=======
>>>>>>> Stashed changes
            // If selected card is unavailable, current selection will be tracked.
            if(state.currentlySelectedCard === null) {
                state.currentlySelectedCard = action.payload;
            } else {
                // Validating whether if selected card's priority is higher.
                const otherCard = action.payload.model;
                const otherStackIndex = action.payload.stackIndex;
                const otherCardIndex = state.currentDeck[otherStackIndex].cards.findIndex(c => c.id === otherCard.id);

                // If the other card is the final element of stack, continue.
                if(otherCardIndex === state.currentDeck[otherStackIndex].cards.length - 1) {
                    
                    if(otherCard.priority - state.currentlySelectedCard.model.priority === -1) {
                        const cardToAdd = {...state.currentlySelectedCard};
                        state.currentDeck[action.payload.stackIndex].cards.push(cardToAdd.model);
                        
                        // Reset the selected card and remove it from its previous deck.
                        const stackIndex = state.currentlySelectedCard.stackIndex;
                        state.currentDeck[stackIndex].cards.pop();
                        // Calculate the points earned by player if there's a complete set of card rows.
                        
                    } else {
                        // If not, cancel the currently selected card.

                    }
                }
<<<<<<< Updated upstream
                state.currentlySelectedCard = null;
=======
                // State mutation
                deck.forEach(s => s.cards[s.cards.length - 1].active = true);
                state.currentDeck = deck;
                state.currentlySelected = initialState.currentlySelected;
                return state;
>>>>>>> Stashed changes
            }
        },
    }
});

export const {increasePoint, decreasePoint, shuffleDeck, selectCard} = gameSlice.actions;
export default gameSlice.reducer;