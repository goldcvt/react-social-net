import { DIALOGS_CREATE_MESSAGE, DIALOGS_UPDATE_CURRENT_MESSAGE } from "../actionTypes"
import { addMessage, typingMessage } from "../dialogFunctions"


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case DIALOGS_CREATE_MESSAGE:
            addMessage(state.messageData, state.currentMessage.text)
            typingMessage(state.currentMessage, "")
            return state

        case DIALOGS_UPDATE_CURRENT_MESSAGE:
            typingMessage(state.currentMessage, ...action.payload)
            return state

        default:
            return state
    }
}

export default dialogsReducer