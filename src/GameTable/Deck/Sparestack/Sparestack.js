import React from 'react';
import './Sparestack.css';

import {addFromSpareStack} from '../../GameTable.reducer';
import { useDispatch, useSelector } from 'react-redux';

const Sparestack = () => {
    const {spareStack} = useSelector(state => state.game);
    const dispatch = useDispatch();
    return (
        <div className="spare-stack" style={{visibility: spareStack.length > 0 ? 'visible' : 'hidden'}}  onClick={() => dispatch(addFromSpareStack())}>
            <img src={'/images/card-bg.webp'} />
        </div>
    );
}

export default Sparestack;