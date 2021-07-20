import { connect } from "react-redux"
import Dialogs from "./Dialogs"


const mapStateToProps = (state) => {
    return {
        messageData: state.dialogs.messageData,
        dialogItemsData: state.dialogs.dialogItemsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;