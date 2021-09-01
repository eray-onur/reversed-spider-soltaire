import React from 'react';
import './Tutorial.css';

const Tutorial = () => {
    return (
        <div>
            <h1 className="tutorial-title">Spider Solitaire Tutorial</h1>
            <div>
                <p>
                    Main objective of the game is to build cards of descending suit sequence from Ace to King. e.g. A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K within the tableau columns. When such a sequence has been formed, it is automatically removed to one of the 8 foundations. When all 104 cards have been played to the foundations as eight separate Ace to King sequences then the game is won.
                    However, in this game, the ranks are reversed in value and the player must sequence the cards the other way to win the game!
                </p>
            </div>
            <div>
                <p>Select any card in the deck.</p>
                <img src='#' alt="Example step 1"/>
                <p>Select another card which is one tier lower than previously selected card (ie. Selecting 9 after 10).</p>
                <p>If the newly arranged stack of cards are a reversed suit sequence of all cards, they are removed from the deck and player earns extra points.</p>
                <img src='#' alt="Example step 2"/>
                <p>Game ends when there is no other card available on any stack.</p>
                <img src='#' alt="Example end"/>
                <p>Player can choose to have hint on which cards are viable for selection, but only 3 times.</p>
                <img src='#' alt="Example hint usage"/>
            </div>
        </div>
    );
}

export default Tutorial;