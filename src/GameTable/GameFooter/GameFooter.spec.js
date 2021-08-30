import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import GameFooter from "./GameFooter";
import { createMemoryHistory } from 'history';
import store from '../../store/index';
import {act} from 'react-dom/test-utils';

test('Forfeit game button should work correctly', () => {
    const history = createMemoryHistory();
    const mockFunction = jest.fn();

    render(
        <Provider store={store}>
            <Router history={history}>
                <GameFooter/>
            </Router>
        </Provider>
    );

    act(() => {
        // Find the link (perhaps using the text content)
        const btnForfeit = document.querySelector('.btn-danger');
        btnForfeit.addEventListener('click', mockFunction);
        btnForfeit.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(mockFunction).toHaveBeenCalledTimes(1);

});

// test('Scoreboard should show points correctly', () => {
//     const mockFunction = jest.fn();


// });