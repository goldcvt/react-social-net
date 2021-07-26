import { connect } from "react-redux"
import { fetchUsers, toggleFriendship } from "../../redux/actionCreators"
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
