import { combineReducers, createStore } from 'redux';
import gameReducer from './../GameTable/GameTable.reducer';


const reducers = combineReducers({
    game: gameReducer
})
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;