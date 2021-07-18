import { PROFILE_CREATE_POST, PROFILE_LIKE_POST, PROFILE_UPDATE_CURRENT_POST } from "../actionTypes";
import { addPost, like, typingPost } from "../profileFunctions";

const profileReducer = (state, action) => {
    switch (action.type) {
        case PROFILE_CREATE_POST:
            addPost(state.postsData, state.currentPost.text, ...action.payload);
            typingPost(state.currentPost, "");
            return state

        case PROFILE_UPDATE_CURRENT_POST:
            typingPost(state.currentPost, ...action.payload);
            return state

        case PROFILE_LIKE_POST:
            like(...action.payload)
            return state

        default:
            return state
    }
}

export default profileReducer;