import React from "react";
import stylesheet from "./CreatePost.module.css"



const CreatePost = (props) => {
    let textElement = React.createRef();

    let addPost = () => {

        let payload = [
            props.userData.name,
            props.userData.avatarUrl,
            0,
            0
        ]

        let action = { type: "PROFILE-CREATE-POST", payload: payload }

        props.dispatch(action);
    }

    let currentPost = () => {
        let payload = [textElement.current.value]
        let action = {type: "PROFILE-UPDATE-CURRENT-POST", payload: payload}
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