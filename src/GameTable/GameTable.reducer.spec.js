import reducer, {determineScore, shuffleDeck, selectCard, addFromSpareStack} from './GameTable.reducer';

const initialState = {
    userName: '',
    currentScore: 0,
    currentlySelected: {
        stackIndex: null,
        cards: []
    },
    currentDeck: [],
    spareStack: [],
};

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        nickName: 'Default Player',
        hasWon: null,
        currentScore: 0,
        currentlySelected: {
            stackIndex: null,
            cards: []
        },
        currentDeck: [],
        spareStack: [],
        hint: {
            left: 3,
            cards: []
        },
      }
    )
});

test('should shuffle the deck', () => {
    expect(reducer(initialState, shuffleDeck())).not.toBeNull();
});



