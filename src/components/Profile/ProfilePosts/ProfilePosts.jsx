import stylesheet from "./ProfilePosts.module.css"
import CreatePostContainer from "./CreatePost/CreatePostContainer"
import PostContainer from "./Post/PostContainer"

const ProfilePosts = (props) => {
    // let's imagine posts came from props. And oh! author should be replaced with authorId
    // And! Instead of getting all the posts as an array we could do something like generator expr to fetch them from server

    let posts = props.state.postsData.map((post) =>
        (<PostContainer state={post} dispatch={props.dispatch} />)
    );

    return (
        <div className={stylesheet.prof_posts}>
            <div className={stylesheet.header_container}>
                <h1>My posts</h1>
            </div>
            <CreatePostContainer dispatch={props.dispatch} state={props.state} />

            <div className={stylesheet.posts}>
                {posts}
            </div>
        </div>
    )
};

export default ProfilePosts;