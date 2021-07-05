import About from './About/About';
import stylesheet from './Profile.module.css';
import ProfilePosts from './ProfilePosts/ProfilePosts';

const Profile = () => {
    return (
        <div className={stylesheet.content}>
            <About />
            <ProfilePosts />
        </div>
    );
}

export default Profile;