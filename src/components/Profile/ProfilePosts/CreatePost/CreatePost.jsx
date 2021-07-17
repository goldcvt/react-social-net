import React from "react";
import { createPost, updateCurrentPost } from "../../../../redux/actionCreators";
import stylesheet from "./CreatePost.module.css"



const CreatePost = (props) => {
    let textElement = React.createRef();

    let addPost = () => {
        let payload = [
            props.userData.name,
            props.userData.avatarUrl,
        ]

        let action = createPost(payload)

        props.dispatch(action);
    }

    let currentPost = () => {
        let payload = [textElement.current.value]
        let action = updateCurrentPost(payload)
        props.dispatch(action)
    }

    return (
        <div className={stylesheet.create_post}>
            <textarea name="create_post" className={stylesheet.textspace}
                placeholder="Share something meaningful. Share something important" ref={textElement} value={props.currentPost.text}
                onChange={currentPost} />

            <div className={stylesheet.buttons}>
                <button className={stylesheet.add} onClick={addPost}>Post</button>
                <button className={stylesheet.add}></button>
            </div>
        </div>
    )
}

export default CreatePost;