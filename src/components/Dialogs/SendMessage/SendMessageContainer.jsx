import { createMessage, updateCurrentMessage } from '../../../redux/actionCreators';
import SendMessage from './SendMessage'

const SendMessageContainer = (props) => {
    debugger;
    let sendMessage = () => {
        let action = createMessage([""])
        props.dispatch(action);
        // props.functions.changeCurrent(props.state.currentMessage, "");
    }

    let typeChars = (text) => {
        let payload = [text]
        let action = updateCurrentMessage(payload)
        props.dispatch(action);
    }

    return <SendMessage typeMessage={typeChars} currentMessage={props.state.currentMessage} sendMessage={sendMessage} />
}

export default SendMessageContainer;