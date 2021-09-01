import { fireEvent, render, screen } from "@testing-library/react";
import GameTable from "./GameTable";
import { Router } from "react-router-dom";
import {Provider, useDispatch} from 'react-redux';
import store from '../store/index';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { changeNickname } from "./GameTable.reducer";

store.dispatch(changeNickname('erayonur45'));

test('deck should not be empty after mount', () => {
    
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GameTable />
            </MemoryRouter>
        </Provider>
    );

    expect(store.getState().game.currentDeck.length).toBeGreaterThan(0);
});

test('spare stack should not be empty on mount', () => {

    render(
        <Provider store={store}>
            <MemoryRouter>
                <GameTable />
            </MemoryRouter>
        </Provider>
    );

    expect(store.getState().game.spaceStack).not.toBeNull();
});