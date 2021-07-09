import stylesheet from "./ProfilePosts.module.css"
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post"

const ProfilePosts = (props) => {


    // let's imagine posts came from props. And oh! author should be replaced with authorId
    // And! Instead of getting all the posts as an array we could do something like generator expr to fetch them from server

    let posts = props.posts.map((post) => 
        (<Post text={post.text} author={post.author} author_avatar={post.avatarUrl} likes={post.likes} shares={post.shares} />)
    );

    return (
        <div className = {stylesheet.prof_posts}>
            <div className={stylesheet.header_container}>
                <h1>My posts</h1>
            </div>
            <CreatePost />
            
            { posts }
        </div>
    )
};

export default ProfilePosts;