import CardModel from './Deck/Card/Card.model';
//import clubA from './../assets/img/cards/club-as.png';
// import club2 from './../assets/img/cards/club-2.png';
// import club3 from './../assets/img/cards/club-3.png';
// import club4 from './../assets/img/cards/club-4.png';
// import club5 from './../assets/img/cards/club-5.png';
// import club6 from './../assets/img/cards/club-6.png';
// import club7 from './../assets/img/cards/club-7.png';
// import club8 from './../assets/img/cards/club-8.png';
// import club9 from './../assets/img/cards/club-9.png';
// import club10 from './../assets/img/cards/club-10.png';
// import clubJ from './../assets/img/cards/club-J.png';
// import clubK from './../assets/img/cards/club-K.png';
// import clubQ from './../assets/img/cards/club-Q.png';


export default class {
    constructor() {

    }

    getAllCards() {
        return [
            new CardModel('club', 'A', 1, '/images/club-as.png'),
            new CardModel('club', '2', 2, '/images/club-2.png'),
            new CardModel('club', '3', 3, '/images/club-3.png'),
            new CardModel('club', '4', 4, '/images/club-4.png'),
            new CardModel('club', '5', 5, '/images/club-5.png'),
            new CardModel('club', '6', 6, '/images/club-6.png'),
            new CardModel('club', '7', 7, '/images/club-7.png'),
            new CardModel('club', '8', 8, '/images/club-8.png'),
            new CardModel('club', '9', 9, '/images/club-9.png'),
            new CardModel('club', '10', 10, '/images/club-10.png'),
            new CardModel('club', 'J', 11, '/images/club-J.png'),
            new CardModel('club', 'Q', 12, '/images/club-Q.png'),
            new CardModel('club', 'K', 12, '/images/club-K.png'),
        ]
    }

    getCardByValue(value) {
        const card = this.getAllCards().filter(c => c.value === value)[0];
        console.log(card);
        return card;
    }

    getClubCardByValue(value) {
        const card = this.getAllCards().filter(c => c.value === value && c.type === 'club')[0];
        console.log(card);
        return card;
    }

    getCardByType(type) {
        return this.getAllCards().filter(c => c.type === type)[0];
    }

    getCardByTypeAndValue(value, type) {
        return this.getAllCards().filter(c => c.value === value && c.type === type)[0];
    }
}