import React, { useState } from 'react';
import Page from './../Common/Layouts/Page';
import EntryForm from './EntryForm/EntryForm';
import Button from './../Common/Components/Button/Button';
import Modal from 'react-modal';
import Tutorial from './Tutorial/Tutorial';
import './Homepage.css';
import { APP_TITLE } from '../Common/Constants';

if (process.env.NODE_ENV !== 'test')
    Modal.setAppElement('#root');

const tutorialModalStyle = {
    content: {
      top: '40%',
      left: '40%',
      marginRight: '-40%',
      transform: 'translate(-40%, -40%)',
      backgroundColor: 'var(--card-color)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
};

const Homepage = (props) => {
    const [tutorialModalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
    <Page
        classes={'home-page'}
    >
        <h1 className="home-heading">{APP_TITLE}</h1>
        <EntryForm {...props}/>
        <Button styleClasses={'btn-tutorial'} onClick={openModal}>How to Play?</Button>
        <Modal
            isOpen={tutorialModalIsOpen}
            onRequestClose={closeModal}
            style={tutorialModalStyle}
            contentLabel="Tutorial"
        >
            <Tutorial/>
        </Modal>
    </Page>);
}

export default Homepage;