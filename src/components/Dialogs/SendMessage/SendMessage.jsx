import React from 'react';
import stylesheet from './SendMessage.module.css';

const SendMessage = (props) => {
    let textElement = React.createRef();

    let sendMessage = () => {
        // let text = textElement.current.value;
        props.functions.create(props.state.messageData);
        // props.functions.changeCurrent(props.state.currentMessage, "");
    }

    let typeChars = () => {
        props.functions.changeCurrent(props.state.currentMessage, textElement.current.value);
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