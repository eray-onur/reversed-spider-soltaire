import { fireEvent, render, screen } from "@testing-library/react";
import {Provider} from 'react-redux';
import store from '../store/index';
import Homepage from "./Homepage";

test('Title "Spider Soltaire" should be rendered', () => {
    render(<Provider store={store}><Homepage/></Provider>);
    const gameTitle = screen.getByText(/spider solitaire/i);

    expect(gameTitle).toBeInTheDocument();
});