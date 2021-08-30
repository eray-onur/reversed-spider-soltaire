import { STACK_GAP } from "../../../Common/Constants";

export default class {

    constructor() {
        this.id = String(Math.floor(Math.random() * 235000));
        this.cards = [];
        this.stackGap = STACK_GAP;
    }
}