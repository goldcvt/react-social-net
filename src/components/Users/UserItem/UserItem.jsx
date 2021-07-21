import { info_wrapper, name_wrapper, friend, avatar_wrapper } from './UserItem.module.scss'

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
            </div>
        </div>
    )
}

export default UserItem;