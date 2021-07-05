import stylesheet from "./ProfilePosts.module.css"
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post"

const ProfilePosts = () => {
    return (
        <div className = {stylesheet.prof_posts}>
            My posts
            <CreatePost />
            <Post />
        </div>
    )
};

export default ProfilePosts;