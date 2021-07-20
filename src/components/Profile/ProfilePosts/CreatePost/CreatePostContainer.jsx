
import { connect } from "react-redux";
import { createPost, updateCurrentPost } from "../../../../redux/actionCreators";
import CreatePost from "./CreatePost";


const mapStateToProps = (state) => {
    return {
        currentPost: state.profile.currentPost,
        posts: state.profile.postsData, 
        userData: state.profile.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        addPost: (payload) => {
            let action = createPost(payload)
            dispatch(action);
        },
        typeToPost: (text) => {
            let payload = [text]
            let action = updateCurrentPost(payload)
            dispatch(action)
        }

    }
}
const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default CreatePostContainer;