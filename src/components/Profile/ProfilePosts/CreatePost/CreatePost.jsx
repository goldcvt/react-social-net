import stylesheet from "./CreatePost.module.css"



const CreatePost = (props) => {
    let addPost = () => {
        let payload = [
            props.userData.name,
            props.userData.avatarUrl,
        ]
        props.addPost(payload);
    }

    let currentPost = (e) => {
        let text = e.target.value;
        props.typeToPost(text)
        
    }

    return (
        <div className={stylesheet.create_post}>
            <textarea name="create_post" className={stylesheet.textspace}
                placeholder="Share something meaningful. Share something important" value={props.currentPost.text}
                onChange={currentPost} />

            <div className={stylesheet.buttons}>
                <button className={stylesheet.add} onClick={addPost}>Post</button>
                <button className={stylesheet.add}></button>
            </div>
        </div>
    )
}

export default CreatePost;