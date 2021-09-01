import { screen, render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import store from './../../../store/index';
import Scoreboard from "./Scoreboard";

test('Scoreboard should show the current score correctly', () => {
    const history = createMemoryHistory();

    const { container } = render(
        <Provider store={store}>
            <Router history={history}>
                <Scoreboard/>
            </Router>
        </Provider>
    );

    const parsedScore = container.lastElementChild.children[1].innerHTML;
    const scoreInStore = store.getState().game.currentScore.toString();

    expect(parsedScore).toEqual(scoreInStore);

});