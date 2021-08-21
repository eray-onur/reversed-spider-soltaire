import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPoints: 0,
    currentlySelectedCard: null,
    cards: [

    ],
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        increasePoint(state, action) {
            state.userName = action.payload;
        },
        decreasePoint(state, action) {
            state.currentPoints = action.payload;
        }
    }
});

export const {increasePoint, decreasePoint} = gameSlice.actions;
export default gameSlice.reducer;