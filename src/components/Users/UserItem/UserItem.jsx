import FriendUnfriendButton from './FollowButton/FriendUnfriendButton'
import { controls_box, controls_wrapper, info_wrapper, name_wrapper, friend, avatar_wrapper } from './UserItem.module.scss'

const UserItem = (props) => {
    return (
        <div className={friend}>
            <div className={avatar_wrapper}>
                <img src={props.user.photos.small} alt={`${props.user.name}'s Avatar`}  />
            </div>
            <div className={info_wrapper}>
                <div className={name_wrapper}>
                    <p>{props.user.name}</p>
                </div>
                <div className={controls_wrapper}>
                    {/* <ButtonContainer component={FriendUnfriendButton} info={props.user.followed} /> */}
                    <div className={controls_box}>
                        <FriendUnfriendButton id = {props.user.id} followed={props.user.followed} toggleFriendship={props.toggleFriendship} />
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;