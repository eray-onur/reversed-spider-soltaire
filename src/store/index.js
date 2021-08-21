import { combineReducers, createStore } from 'redux';
import globalReducers from './global/index';
import gameReducer from './game/index';

const reducers = combineReducers({
    global: globalReducers, 
    game: gameReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;