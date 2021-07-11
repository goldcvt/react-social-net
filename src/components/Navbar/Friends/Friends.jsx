import { NavLink } from "react-router-dom";
import stylesheet from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let threeFriends = props.state.slice(0, 3);
    let topFriends = [];

    for (let friend of threeFriends) {
        topFriends.push(<Friend friend={friend} />);
    }

    return (
        <div className={stylesheet.friends_block}>
            <h1 className={stylesheet.title}>Friends</h1>
            <div className={stylesheet.friends_container}>
                {topFriends}
            </div>
        </div>
    );
}

export default Friends;