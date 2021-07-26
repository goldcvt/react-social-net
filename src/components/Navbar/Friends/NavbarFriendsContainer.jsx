import { connect } from "react-redux"
import Friends from "./Friends"


const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = {}

const NavbarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default NavbarFriendsContainer;