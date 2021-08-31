import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../Common/Components/Button/Button";
import { ALERT_INVALID_NICKNAME } from "../../Common/Constants";
import { changeNickname } from './../../GameTable/GameTable.reducer';
import './EntryForm.css';

const EntryForm = (props) => {
    const dispatch = useDispatch();
    
    
    const [nickname, setNickname] = useState({value: ''});

    useEffect(() => {
        const previousNickname = localStorage.getItem("nickname");
        if(previousNickname)
            setNickname({value: previousNickname});
            dispatch(changeNickname(previousNickname));
    }, []);

    const handleSubmit = () => {
        if(nickname.value.length > 6) {
            localStorage.setItem("nickname", nickname.value);
            dispatch(changeNickname(nickname.value));
            props.history.push(`/game`);
        } else {
            alert(ALERT_INVALID_NICKNAME);
        }
    }


    return (
        <div className="entry-form-layout">
            <div className="entry-form-card">
                <div className="entry-form-row">
                    <p className="text-1">Nickname: </p>
                    <form className="entry-form">
                        <input className="text-input" type="text" placeholder="i.e: Eraybaba97" value={nickname.value}
                            onChange={(e) => setNickname({value: e.target.value})}/>
                    </form>
                </div>
                <Button styleClasses={'btn-start btn-rounded'} type="button" onClick={handleSubmit}>Start Game</Button>
            </div>
        </div>
    );
}

export default EntryForm;