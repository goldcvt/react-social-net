import stylesheet from './SendMessage.module.css';

const SendMessage = (props) => {
    debugger;
    let typeChars = (e) => {
        let text = e.target.value;
        props.typeMessage(text)
    }

    return (
        <div className={stylesheet.container}>
            <div className={stylesheet.field}>
                <input type="text" value={props.currentMessage.text} onChange={typeChars} />
            </div>
            <div className={stylesheet.button_wrapper}>
                <button className={stylesheet.button} onClick={props.sendMessage} >
                    Send
                </button>
            </div>
        </div>
    )
}

export default SendMessage;