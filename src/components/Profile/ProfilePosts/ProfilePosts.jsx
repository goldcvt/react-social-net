import stylesheet from "./ProfilePosts.module.css"
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post"

const ProfilePosts = () => {
    return (
        <div className = {stylesheet.prof_posts}>
            My posts
            <CreatePost />
            <Post text="Howdy, partner" author="Ragnar Lodbrok" author_avatar='https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg' likes={312} shares={12} />
            <Post text="Lorem ipsemum... You know the drill" author="Ragnar Lodbrok" author_avatar='https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg' likes={228} shares={124}/>
        </div>
    )
};

export default ProfilePosts;