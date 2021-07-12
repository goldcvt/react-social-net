import React from "react";
import stylesheet from "./CreatePost.module.css"



const CreatePost = (props) => {
    let textElement = React.createRef();

    let addPost = () => {
        // let text = props.currentPost.text; // We don't need it since we can post with currentPost value
        props.functions.create(
            props.posts, 
            props.userData.name,
            props.userData.avatarUrl,
            0,
            0
        );
        // props.functions.changeCurrent(props.currentPost,  "");
    }

    let currentPost = () => {
        props.functions.changeCurrent(props.currentPost,  textElement.current.value);
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