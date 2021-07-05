import stylesheet from "./CreatePost.module.css"

const CreatePost = () => {
    return (
        <div className={stylesheet.create_post}>
            <textarea name="" className={stylesheet.textspace}></textarea>

            <div className={stylesheet.buttons}>
                <button className={stylesheet.add}></button>
                <button className={stylesheet.add}></button>
            </div>
        </div>
    )
}

export default CreatePost;