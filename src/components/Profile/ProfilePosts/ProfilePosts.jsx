import stylesheet from "./ProfilePosts.module.css"
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post"

const ProfilePosts = (props) => {


    // let's imagine posts came from props. And oh! author should be replaced with authorId
    // And! Instead of getting all the posts as an array we could do something like generator expr to fetch them from server
    let postsData = [
        {
            id: 0, text: "Howdy, partner", author: "Ragnar Lodbrok", avatarUrl: 'https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg',
            likes: 312, shares: 12
        },
        {
            id: 1, text: "Lorem ipsemum... You know the drill", author: "Ragnar Lodbrok", avatarUrl: 'https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg',
            likes: 228, shares: 124
        }
    ];

    let posts = postsData.map((post) => 
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