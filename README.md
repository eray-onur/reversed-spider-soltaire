# Spider Solitaire

> Live Game: https://reversed-spider-solitaire-eray.herokuapp.com/

## Objective

Main objective of the game is to build cards of descending suit sequence from Ace to King. e.g. A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K within the tableau columns. When such a sequence has been formed, it is automatically removed to one of the 8 foundations. When all 104 cards have been played to the foundations as eight separate Ace to King sequences then the game is won.
However, in this game, the ranks are reversed in value and the player must sequence the cards the other way to win the game!

## Valuable Info

* Only One Suit Soltaire is implemented at its current state.
*  Drag and Drop feature is not implemented at its current state. Player must only select the cards to progress the game.


## Development Details

* Unfortunately, Lighthouse cannot analyze app's performance due to utilized page animations. Root cause can be explained here: https://github.com/GoogleChrome/lighthouse/issues/10869

### Unit Testing Coverage

![Unit Test Coverage](/.readme-assets/unit-tests.PNG)

### End to End Testing Coverage

![E2E Test Coverage](/.readme-assets/end-to-end-tests.PNG)
