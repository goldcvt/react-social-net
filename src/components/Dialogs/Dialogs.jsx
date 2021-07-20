import stylesheet from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import SendMessageContainer from './SendMessage/SendMessageContainer';

const Dialogs = (props) => {
    let messages = props.state.messageData.map(message => <Message message={message.text} toMe={message.toMe} />);
    let dialogs = props.state.dialogItemsData.map(user => <DialogItem user={user} />);

    return (
        <div className={stylesheet.dialogs_page}>
            <div className={stylesheet.dialogs_selector}>

                {dialogs}

            </div>
            <div className={stylesheet.dialog_window}>
                {/* Need some loader here or something. I mean dialogs are different for different users. We could load it with some
                smart-ass routing component of our own */}
                
                {messages}
                <SendMessageContainer />
            </div>
        </div>
    );
}

export default Dialogs;