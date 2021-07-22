import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        info: ownProps.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

// doesn't work :)
const ButtonContainer = (props) => {
    return connect(mapStateToProps, mapDispatchToProps)(props.component)
}

export default ButtonContainer;