import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName } from '../store/global/index';
import Page from './../Common/Page';
import EntryForm from './EntryForm/EntryForm';
import './Homepage.css';

const Homepage = (props) => {
    const {userName} = useSelector(state => state.global);
    const dispatch = useDispatch();

    const a = useEffect(() => {console.log(userName)})

    return (
    <Page
        pageVariants={{
            in: {
                opacity: 1,
                x: 0
            },
            out: {
                opacity: 0,
                x: '-100vw'
            }
        }}
        pageTransition={{
            duration: 0.35,
            transition: 'linear'
        }}
    >
        <h1 className="home-heading">Spider Soltaire</h1>
        <p>Login state: {userName}</p>
        <button onClick={() => dispatch(setUserName('allah'))}>+</button>
        <EntryForm {...props}/>
    </Page>);
}

export default Homepage;