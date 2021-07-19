import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import friendsReducer from "./reducers/friendsReducer";
import profileReducer from "./reducers/profileReducer";

let rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer
})

let store = createStore(rootReducer);

export default store;