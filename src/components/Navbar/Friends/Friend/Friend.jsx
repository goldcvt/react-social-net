import stylesheet from '../Friends.module.css';

const Friend = (props) => {
    return <div className={stylesheet.friend}><img src={props.friend.photos.small} alt={props.friend.name} /></div>
}

export default Friend;