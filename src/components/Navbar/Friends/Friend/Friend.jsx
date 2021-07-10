import stylesheet from '../Friends.module.css';

const Friend = (props) => {
    return <div className={stylesheet.friend}><img src={props.friend.avatarUrl} alt={props.friend.name} /></div>
}

export default Friend;