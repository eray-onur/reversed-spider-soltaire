export default class CardModel {
    constructor(suit, rank, priority, src, active) {
        this.id = [String(Math.floor(Math.random() * 10000)), suit, rank].join('-');
        this.suit = suit;
        this.rank = rank;
        this.priority = priority;
        this.src = src;
        this.active = active;
    }
}