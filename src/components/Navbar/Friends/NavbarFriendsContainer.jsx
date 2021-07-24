import { connect } from "react-redux"
import Friends from "./Friends"


const mapStateToProps = (state) => {
    return {
        state: state.users
    }
}

const mapDispatchToProps = {}

const NavbarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default NavbarFriendsContainer;