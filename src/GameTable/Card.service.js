import CardModel from './Deck/Card/Card.model';
import CardstackModel from './Deck/Cardstack/Cardstack.model';

const STACK_COUNT = 10;

export default class CardService {
    constructor() {
        this.currentDeck = [];
        this.oneSuitCardPile = [];
        this.clubCards = [
            { suit: 'club', rank: 'A', priority: 1, src: '/images/club-as.webp'},
            { suit: 'club', rank: '2', priority: 2, src: '/images/club-2.webp' },
            { suit: 'club', rank: '3', priority: 3, src: '/images/club-3.webp' },
            { suit: 'club', rank: '4', priority: 4, src: '/images/club-4.webp' },
            { suit: 'club', rank: '5', priority: 5, src: '/images/club-5.webp' },
            { suit: 'club', rank: '6', priority: 6, src: '/images/club-6.webp' },
            { suit: 'club', rank: '7', priority: 7, src: '/images/club-7.webp' },
            { suit: 'club', rank: '8', priority: 8, src: '/images/club-8.webp' },
            { suit: 'club', rank: '9', priority: 9, src: '/images/club-9.webp' },
            { suit: 'club', rank: '10', priority: 10, src: '/images/club-10.webp' },
            { suit: 'club', rank: 'J', priority: 11, src: '/images/club-J.webp' },
            { suit: 'club', rank: 'Q', priority: 12, src: '/images/club-Q.webp' },
            { suit: 'club', rank: 'K', priority: 13, src: '/images/club-K.webp' },
        ];
    }

    // Set the entire one suit deck.
    setAllOneSuitCards() {
        this.oneSuitCardPile = [];
        for(let i = 0; i < 8; i++) {
            this.clubCards.forEach((card) => this.oneSuitCardPile.push(card));
        }
        return this.oneSuitCardPile;
    }

    takeCardFromPile(rank) {
        const foundCard = this.oneSuitCardPile.find(c => c.rank === rank);

        // If card is found in the pile, return it and remove from original position.
        if(foundCard) {
            const newInstance = new CardModel(foundCard.suit, foundCard.rank, foundCard.priority, foundCard.src);
            this.oneSuitCardPile.splice(this.oneSuitCardPile.indexOf(foundCard), 1);

            return newInstance;
        }

        return -1;
    }

    // Generator function which iterates through card stacks.

    * findAvailableStack() {
        try {
            let i = 0;
            while(true) {
                yield i++;
                if(i >= STACK_COUNT)
                    i = 0;
            }
        } catch(ex) {
            console.error(ex);
        }
        
    }
    // Sets up the entire deck and 10 card stacks.
    shuffleCards() {
        this.setAllOneSuitCards();
        let currentDeck = [];
        let spareStack = [];
        // Pushing the card stacks to deck.
        for(let i = 0; i < 10; i++) {
            currentDeck.push(new CardstackModel());
        }

        // Pushing the initial cards to stacks.
        for(let i = 0; i < 4; i++) {
            currentDeck[i].cards.push(this.takeCardFromPile('6'));
        }
        for(let i = 4; i < 10; i++) {
            currentDeck[i].cards.push(this.takeCardFromPile('5'));
        }

        // Randomly select any card from pile and add it to game deck.
        const startLength = (this.oneSuitCardPile.length) / 2;
        const findAvailableStack = this.findAvailableStack();
        for(var i = 0; i < startLength; i++) {
            const randCardIndex = Math.floor(Math.random() * this.oneSuitCardPile.length);
            const card = this.takeCardFromPile(this.oneSuitCardPile[randCardIndex].rank);
            currentDeck[findAvailableStack.next().value].cards.push(card);

        }
        this.oneSuitCardPile.forEach(c => 
            spareStack.push(
                new CardModel(c.suit, c.rank, c.priority, c.src, false)
            )
        );
        currentDeck.map(s => s.cards[s.cards.length - 1].active = true);
        return [currentDeck, spareStack];
    }
}