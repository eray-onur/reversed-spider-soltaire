import React from 'react';
import './Tutorial.css';

const Tutorial = () => {
    return (
        <div className="tutorial-card">
            <h1 className="tutorial-title">Spider Solitaire Tutorial</h1>
            <p className='tutorial-text'>
                    Main objective of the game is to build cards of descending suit sequence from Ace to King. e.g. A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K within the tableau columns. When such a sequence has been formed, it is automatically removed to one of the 8 foundations. When all 104 cards have been played to the foundations as eight separate Ace to King sequences then the game is won.
                    However, in this game, the ranks are reversed in value and the player must sequence the cards the other way to win the game!
            </p>
            <hr className="tutorial-divider"/>
            <div>
                <p className='tutorial-text'>Select any card in the deck.</p>
                <img className="tutorial-img" src='/images/ExampleStep1.webp' alt="Example step 1"/>
                <p className='tutorial-text'>Select another card which is one tier lower than previously selected card (ie. Selecting 9 after 10).</p>
                <p className='tutorial-text'>If the newly arranged stack of cards are a reversed suit sequence of all cards, they are removed from the deck and player earns extra points.</p>
                <img className="tutorial-img" src='/images/ExampleStep2.webp' alt="Example step 2"/>
                <p className='tutorial-text'>Game ends when there is no other card available on any stack.</p>
                <img className="tutorial-img" src='/images/ExampleWin.webp' alt="Example end"/>
                <p className='tutorial-text'>Player can choose to have hint on which cards are viable for selection, but only 3 times.</p>
                <img className="tutorial-img" src='/images/ExampleHint.webp' alt="Example hint usage"/>
            </div>
        </div>
    );
}

export default Tutorial;