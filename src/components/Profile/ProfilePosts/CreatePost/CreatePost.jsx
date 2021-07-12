import React from "react";
import stylesheet from "./CreatePost.module.css"



const CreatePost = (props) => {
    let textElement = React.createRef();

    let addPost = () => {
        let text = textElement.current.value;
        props.functions.create(
            props.posts, 
            text,
            props.userData.name,
            props.userData.avatarUrl,
            0,
            0
        );
        textElement.current.value = "";
    }

    let currentPost = () => {
        props.functions.changeCurrent(props.currentPost,  textElement.current.value);
        debugger;
        textElement.current.value = props.currentPost.text;
    }

    return (
        <div className={stylesheet.create_post}>
            <textarea name="create_post" className={stylesheet.textspace} 
            placeholder="Share something meaningful. Share something important" ref={textElement} onInput={currentPost} >

            </textarea>

            <div className={stylesheet.buttons}>
                <button className={stylesheet.add} onClick={addPost}>Post</button>
                <button className={stylesheet.add}></button>
            </div>
        </div>
    )
}

export default CreatePost;