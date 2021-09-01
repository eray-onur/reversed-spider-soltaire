import React from 'react';
import './Sparestack.css';

import {addFromSpareStack} from '../GameTable.reducer';
import { useDispatch, useSelector } from 'react-redux';

const Sparestack = () => {
    const {spareStack, hasWon} = useSelector(state => state.game);
    const dispatch = useDispatch();
    return (
        <div className="spare-stack" style={{opacity: hasWon ? '0' : '1'}}>
            <img style={{visibility: spareStack.length > 0 ? 'visible' : 'hidden'}} src={'/images/card-bg.webp'} onClick={() => dispatch(addFromSpareStack())} />
            <p style={{visibility: spareStack.length == 0 ? 'visible' : 'hidden'}} className='spare-stack-warning'>No cards left.</p>
        </div>
    );
}

export default Sparestack;