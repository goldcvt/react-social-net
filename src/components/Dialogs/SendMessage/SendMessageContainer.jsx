import { connect } from 'react-redux';
import { createMessage, updateCurrentMessage } from '../../../redux/actionCreators';
import SendMessage from './SendMessage'


const mapStateToProps = (state) => {
    return {
        currentMessage: state.dialogs.currentMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        typeMessage: (text) => {
            let payload = [text]
            let action = updateCurrentMessage(payload)
            dispatch(action);
        },
        sendMessage: () => {
            let action = createMessage([""])
            dispatch(action);
        }
    }
}
const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage)

export default SendMessageContainer;