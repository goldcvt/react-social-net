
import { createPost, updateCurrentPost } from "../../../../redux/actionCreators";
import CreatePost from "./CreatePost";



const CreatePostContainer = (props) => {

    let addPost = (payload) => {

        let action = createPost(payload)

        props.dispatch(action);
    }

    let typeToPost = (text) => {
        let payload = [text]
        let action = updateCurrentPost(payload)
        props.dispatch(action)
    }

    // watch for upper node of tree
    return <CreatePost typeToPost={typeToPost} addPost={addPost} currentPost={props.state.currentPost}
    posts={props.state.postsData} userData={props.state.userData} />
}

export default CreatePostContainer;