import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import profileReducer from "./reducers/profileReducer";

let rootReducer = combineReducers({
    // it's like a state object (these keys...)
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
})

let store = createStore(rootReducer);

window.store = store;

export default store;