import FriendUnfriendButton from './FollowButton/FriendUnfriendButton'
import { controls_box, controls_wrapper, info_wrapper, name_wrapper, friend, avatar_wrapper } from './UserItem.module.scss'

const UserItem = (props) => {
    return (
        <div className={friend}>
            <div className={avatar_wrapper}>
                <img src={props.user.avatarUrl} alt={`${props.user.name}'s Avatar`}  />
            </div>
            <div className={info_wrapper}>
                <div className={name_wrapper}>
                    <p>{props.user.name}</p>
                </div>
                <div className={controls_wrapper}>
                    {/* <ButtonContainer component={FriendUnfriendButton} info={props.user.isFriend} /> */}
                    <div className={controls_box}>
                        <FriendUnfriendButton userId = {props.user.userId} isFriend={props.user.isFriend} dispatch={props.dispatch} />
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;