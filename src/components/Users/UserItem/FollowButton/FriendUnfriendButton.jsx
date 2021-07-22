import { toggleFriendship } from '../../../../redux/actionCreators'
import { button, befriend, unfriend } from './FriendUnfriendButton.module.scss'

const FriendUnfriendButton = (props) => {
    const toggle = () => {
        let action = toggleFriendship([props.isFriend, props.userId])
        props.dispatch(action)
    }
    // TODO it's better to give a button a state and toggle it, probably
    let text = ""
    let buttonClass = null
    if (props.isFriend) {
        text = "Unfriend"
        buttonClass = unfriend
    } else {
        text  = "Befriend"
        buttonClass = befriend
    }
    return <button className={`${button.buttonClass} ${button}`} onClick={toggle} >{text}</button>

}

export default FriendUnfriendButton;