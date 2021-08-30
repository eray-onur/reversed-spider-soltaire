import { fireEvent, render, screen } from "@testing-library/react";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Cardstack from "./Cardstack";
import Card from './../Card/Card';
import CardModel from "../Card/Card.model";
import CardstackModel from "./Cardstack.model";
import { STACK_GAP } from "../../../Common/Constants";
import {Provider} from 'react-redux';
import store from '../../../store/index';
import { shuffleDeck } from "../../GameTable.reducer";

// test('should display cards', () => {
//     const model = new CardstackModel();
//     model.cards = [
//         new CardModel('club', '8', 8, '/assets/club-8.webp'),
//         new CardModel('club', '9', 9, '/assets/club-9.webp'),
//         new CardModel('club', '10', 10, '/assets/club-10.webp')
//     ];
    
//     store.dispatch(shuffleDeck());



//     let {container} = render(
//         <Provider store={store}>
//             <DndProvider backend={HTML5Backend}>
//                 <Cardstack stackIndex={0} style={{}}>
//                     {store.getState().game.currentDeck[0].cards.forEach(c => {
//                         return <Card model={c} style={{}}/>
//                     })}
//                 </Cardstack>
//             </DndProvider>
//         </Provider>
//     );
//     expect(container.getElementsByClassName('card-stack')[0].children).toEqual(3);
// });

test('gap of stacked cards is above zero pixels', () => {
    const model = new CardstackModel();
    model.cards = [
        new CardModel('club', '8', 8, '/assets/club-8.webp'),
        new CardModel('club', '9', 9, '/assets/club-9.webp'),
        new CardModel('club', '10', 10, '/assets/club-10.webp')
    ];

    store.dispatch(shuffleDeck());

    render(
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <Cardstack stackIndex={0} style={{}}>
                    <Card model={model.cards[0]} style={{}}/>
                    <Card model={model.cards[1]} style={{}}/>
                    <Card model={model.cards[2]} style={{}}/>
                </Cardstack>
            </DndProvider>
        </Provider>
    );

    expect(model.stackGap).toEqual(STACK_GAP)
});