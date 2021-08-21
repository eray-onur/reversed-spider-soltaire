import React from 'react';
import CardService from './Card.service';

const cardService = new CardService();

const deck = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

export const GameContext = React.createContext({
    score: 0,
    cards: cardService.getAllCards(),
    deck:[],
    startDeck: function() {
        // Laying out the first cards.
        const laidDeck = [...deck];
        laidDeck[0].push(cardService.getClubCardByValue(6));
        laidDeck[1].push(cardService.getClubCardByValue(6));
        laidDeck[2].push(cardService.getClubCardByValue(6));
        laidDeck[3].push(cardService.getClubCardByValue(6));
        laidDeck[4].push(cardService.getClubCardByValue(5));
        laidDeck[5].push(cardService.getClubCardByValue(5));
        laidDeck[6].push(cardService.getClubCardByValue(5));
        laidDeck[7].push(cardService.getClubCardByValue(5));
        laidDeck[8].push(cardService.getClubCardByValue(5));
        laidDeck[9].push(cardService.getClubCardByValue(5));
        // Randomizing the rest of the cards.
        
    }
});