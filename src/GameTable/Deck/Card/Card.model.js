export default class CardModel {
    constructor(suit, rank, priority, src) {
        this.id = Math.floor(Math.random() * 10000);
        this.suit = suit;
        this.rank = rank;
        this.priority = priority;
        this.src = src;
    }
}