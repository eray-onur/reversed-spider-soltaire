import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../../store/index';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Card from "./Card";
import CardModel from "./Card.model";

test('should trigger onSelect function when clicked', () => {

    const onClickCard = jest.fn();

    const {container} = render(
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <Card model={{}} style={{}} onSelect={onClickCard}/>
            </DndProvider>
        </Provider>
    );

    fireEvent.click(container.getElementsByClassName("game-card")[0]);

    expect(onClickCard).toHaveBeenCalledTimes(1);
});

test('should render image source from the model class', () => {
    const model = new CardModel('club', 10, 10, '/assets/club-10.webp');

    const {container} = render(
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <Card model={model} style={{}}/>
            </DndProvider>
        </Provider>
    );
    
    const image = container.getElementsByTagName('img')[0];

    expect(image.src).toEqual('http://localhost/assets/club-10.webp');
});