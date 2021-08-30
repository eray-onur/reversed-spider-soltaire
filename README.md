# Spider Soltaire

> Live Game: https://reversed-spider-soltaire.herokuapp.com/

## Objective

The object of the game is to build cards of descending suit sequence from King to Ace. e.g. K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2, A within the tableau columns. When such a sequence has been formed, it is automatically removed to one of the 8 foundations. When all 104 cards have been played to the foundations as eight separate King to Ace sequences then the game is won.
However, in this game, the ranks are reversed in value and the player must sequence the cards the other way to win the game!

## Valuable Info

* Only One Suit Soltaire is implemented at its current state.
*  Drag and Drop feature is not implemented at its current state. Player must only select the cards to progress the game.


## Development Details

* Unfortunately, Lighthouse cannot analyze app's performance due to utilized page animations. Root cause can be explained here: https://github.com/GoogleChrome/lighthouse/issues/10869
