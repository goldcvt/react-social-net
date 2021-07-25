import deepCopy from "../../utils/deepCopy";
import { DIALOGS_CREATE_MESSAGE, DIALOGS_UPDATE_CURRENT_MESSAGE } from "../actionTypes"
import { addMessage, typingMessage } from "../dialogFunctions"

let dialogItemsData = [{
    id: 1,
    name: "Mary J Blige",
    avatarUrl: "https://bstars.ru/media/djcatalog2/images/item/20/mary-j-blige.1_f.webp"
  },
  {
    id: 2,
    name: "John Legend",
    avatarUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/pmn/DR2KSCTTKNCMBGUZCCFOCQZTV4.jpg"
  },
  {
    id: 3,
    name: "Kanye West",
    avatarUrl: "https://www.film.ru/sites/default/files/styles/thumb_260x320/public/persones/_imported/1577190.jpg"
  },
];

let messageData = [{
    msgId: 0,
    text: "Fuck",
    toMe: true
  },
  {
    msgId: 1,
    text: "I miss you!",
    toMe: true
  },
  {
    msgId: 2,
    text: "Too bad",
    toMe: false
  }
];

let currentMessage = {
  text: ""
}

let inititalState = {
    dialogItemsData,
    messageData,
    currentMessage
}

const dialogsReducer = (state = inititalState, action) => {
    switch (action.type) {
        case DIALOGS_CREATE_MESSAGE: {
          let newState = {
            ...state
          }
          newState.currentMessage = deepCopy(state.currentMessage)
          newState.messageData = deepCopy(state.messageData)
          addMessage(newState.messageData, newState.currentMessage.text)
          typingMessage(newState.currentMessage, "")
          return newState
        }

        case DIALOGS_UPDATE_CURRENT_MESSAGE:
          {
            let newState = {
              ...state
            }
            newState.currentMessage = deepCopy(state.currentMessage)
            typingMessage(newState.currentMessage, ...action.payload)
            return newState
          }

        default:
            return state
    }
}

export default dialogsReducer