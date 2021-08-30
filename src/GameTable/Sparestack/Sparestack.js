import React from 'react';
import './Sparestack.css';

import {addFromSpareStack} from '../GameTable.reducer';
import { useDispatch, useSelector } from 'react-redux';

const Sparestack = () => {
    const {spareStack} = useSelector(state => state.game);
    const dispatch = useDispatch();
    return (
        <div className="spare-stack">
            <img style={{visibility: spareStack.length > 0 ? 'visible' : 'hidden'}} src={'/images/card-bg.webp'} onClick={() => dispatch(addFromSpareStack())} />
            <p style={{visibility: spareStack.length == 0 ? 'visible' : 'hidden'}} className='spare-stack-warning'>No cards left.</p>
        </div>
    );
}

export default Sparestack;