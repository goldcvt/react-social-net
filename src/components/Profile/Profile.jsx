import About from './About/About';
import stylesheet from './Profile.module.css';
import ProfilePosts from './ProfilePosts/ProfilePosts';

// We might want to download all the users that are on the page, but I'm not quite sure. We'll have this "getUser" thing to
// get user object by id


const Profile = (props) => {
    let userData = props.state.userData;
    let postsData = props.state.postsData;
    let state = {postsData, userData}
    return (
        <div className={stylesheet.content}>
            <About user={userData} />
            <ProfilePosts state={state} functions={props.functions.posts} />
        </div>
    );
}

export default Profile;