import React from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import "./Deck.css";

const Deck = (props) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="deck">
                {props.children}
            </div>
        </DndProvider>
    );
}

export default Deck;