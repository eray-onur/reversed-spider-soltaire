import React from 'react';
import Page from './../Common/Layouts/Page';
import EntryForm from './EntryForm/EntryForm';
import './Homepage.css';

const Homepage = (props) => {

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
        classes={'home-page'}
    >
        <h1 className="home-heading">Spider Soltaire</h1>
        <EntryForm {...props}/>
    </Page>);
}

export default Homepage;