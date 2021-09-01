import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import store from './../../../store/index';
import NicknameBoard from "./NicknameBoard";

test('Nickname board should show player nickname correctly', () => {
    const history = createMemoryHistory();

    const { container } = render(
        <Provider store={store}>
            <Router history={history}>
                <NicknameBoard/>
            </Router>
        </Provider>
    );

    const parsedNickname = container.lastElementChild.children[1].innerHTML;
    const nicknameInStore = store.getState().game.nickName

    expect(parsedNickname).toEqual(nicknameInStore);

});