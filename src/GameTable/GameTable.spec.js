import { fireEvent, render, screen } from "@testing-library/react";
import GameTable from "./GameTable";
import { Router } from "react-router-dom";
import {Provider} from 'react-redux';
import store from '../store/index';
import { createMemoryHistory } from 'history';

test('deck should not be empty after mount', () => {
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
            <Router history={history}>
                <GameTable />
            </Router>
        </Provider>
    );

    expect(store.getState().game.currentDeck.length).toBeGreaterThan(0);
});

test('spare stack should not be empty on mount', () => {
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
            <Router history={history}>
                <GameTable />
            </Router>
        </Provider>
    );

    expect(store.getState().game.spaceStack).not.toBeNull();
});