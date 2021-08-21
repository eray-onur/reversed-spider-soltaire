import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: 'Default Player',
    game: {
        currentPoints: 0,
        currentlySelectedCard: null,
        cards: [

        ],
    }
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setUserName(state, action) {
            state.userName = action.payload;
        }
    }
});

export const {setUserName} = globalSlice.actions;
export default globalSlice.reducer;