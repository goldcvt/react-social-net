import ProfilePosts from "./ProfilePosts"
import { connect } from "react-redux"


const mapStateToProps = (state) => {
    return {
        state: state.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}
const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer;