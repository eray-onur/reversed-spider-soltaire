import { screen, render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import store from './../../../store/index';
import Counter from "./Counter";

test('Counter should show time correctly on start', () => {
    const history = createMemoryHistory();

    const { container } = render(
        <Provider store={store}>
            <Router history={history}>
                <Counter/>
            </Router>
        </Provider>
    );

    const parsedTime = container.lastElementChild.innerHTML;

    expect(parsedTime).toEqual('0');

});