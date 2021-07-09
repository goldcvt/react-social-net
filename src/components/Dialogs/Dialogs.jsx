import stylesheet from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let messages = props.messageData.map(message => <Message message={message.text} toMe={message.toMe} />);

    let dialogs = props.dialogItemsData.map(user => <DialogItem user={user} />);

    return (
        <div className={stylesheet.dialogs_page}>
            <div className={stylesheet.dialogs_selector}>

                {dialogs}

            </div>
            <div className={stylesheet.dialog_window}>
                {/* Need some loader here or something */}
                {messages}

            </div>
        </div>
    );
}

export default Dialogs;