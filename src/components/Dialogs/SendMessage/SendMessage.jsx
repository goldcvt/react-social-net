import React from 'react';
import stylesheet from './SendMessage.module.css';

const SendMessage = (props) => {

    let textElement = React.createRef();

    let sendMessage = () => {
        let text = textElement.current.value;
        props.functions.create(props.state, text);
        // console.log(props.state);
    }

    return (
        <div className={stylesheet.container}>
            <div className={stylesheet.field}>
                <input type="text" ref={textElement} />
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