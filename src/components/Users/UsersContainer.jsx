import { connect } from "react-redux"
import { countAllUsers, fetchUsers, reduceUsers, toggleFriendship } from "../../redux/actionCreators"
import Users from "./UsersClass"

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFriendship: (payload) => {
            let action = toggleFriendship(payload)
            dispatch(action)
        },
        fetchUsers: (payload) => {
            let action = fetchUsers(payload)
            dispatch(action)
        },
        reduceUsers: (payload) => {
            let action = reduceUsers(payload)
            dispatch(action)
        },
        countAllUsers: (payload) => {
            let action = countAllUsers(payload)
            dispatch(action)
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
