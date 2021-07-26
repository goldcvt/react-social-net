import stylesheet from '../Friends.module.css';

const Friend = (props) => {
    return <div className={stylesheet.friend}><img src={props.friend.photos.small ? props.friend.photos.small : 
        "https://static.wikia.nocookie.net/onepunchman/images/8/81/Saitama_Anime_Profile.png"} 
    alt={props.friend.name} /></div>
}

export default Friend;