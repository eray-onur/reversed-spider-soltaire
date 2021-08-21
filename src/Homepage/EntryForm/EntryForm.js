import React, { useEffect } from "react";
import './EntryForm.css';

const EntryForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`/deck`);
    }
    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <div className="entry-form-card">
            <p>Type your nickname: </p>
            <form onSubmit={(e) => handleSubmit(e)} className="entry-form">
                <input type="text" placeholder="i.e: Eraybaba97"/>
                <button type="submit">Start!</button>
            </form>
        </div>
    );
}

export default EntryForm;