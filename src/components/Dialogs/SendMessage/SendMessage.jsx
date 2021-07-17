import React from 'react';
import stylesheet from './SendMessage.module.css';

const SendMessage = (props) => {
    let textElement = React.createRef();

    let sendMessage = () => {
        let action = {type: "DIALOGS-CREATE-MESSAGE", payload: [""]}
        props.dispatch(action);
        // props.functions.changeCurrent(props.state.currentMessage, "");
    }

    let typeChars = () => {
        let payload = [
            textElement.current.value
        ]
        let action = {type: "DIALOGS-UPDATE-CURRENT-MESSAGE", payload: payload}
        props.dispatch(action);
    }

    return (
        <div className={stylesheet.container}>
            <div className={stylesheet.field}>
                <input type="text" ref={textElement} value={props.state.currentMessage.text} onChange={typeChars} />
            </div>
            <div className={stylesheet.button_wrapper}>
                <button className={stylesheet.button} onClick={sendMessage} >
                    Send
                </button>
            </div>
        </div>
    )
}

export default SendMessage;