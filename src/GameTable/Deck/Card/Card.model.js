export default class CardModel {
    constructor(suit, rank, priority, src) {
        this.suit = suit;
        this.rank = rank;
        this.priority = priority;
        this.src = src;
    }
    getSuit() {
        return this.suit;
    }
}