import { toggleFriendship } from '../../../../redux/actionCreators'
import { button, befriend, unfriend } from './FriendUnfriendButton.module.scss'

const FriendUnfriendButton = (props) => {
    const toggle = () => {
        let payload = [props.id]
        props.toggleFriendship(payload)
    }
    // TODO it's better to give a button a state and toggle it, probably
    let text = props.followed ? "Unfriend" : "Befriend"
    let buttonClass = props.followed ? unfriend : befriend
    return <button className={`${button.buttonClass} ${button}`} onClick={toggle} >{text}</button>

}

export default FriendUnfriendButton;