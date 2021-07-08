import stylesheet from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    // let's imagine that this thing came into our props
    const dialogItemsData = [
        { userId: 1, name: "Brigitte Valentine" },
        { userId: 2, name: "Actual Name" },
        { userId: 3, name: "Not an Actual Name" },
    ];

    const messageData = [
        { msgId: 0, text: "Fuck", toMe: true },
        { msgId: 1, text: "I miss you!", toMe: true },
        { msgId: 2, text: "Too bad", toMe: false }
    ]

    let messages = messageData.map(message => <Message message={message.text} toMe={message.toMe} />);

    let dialogs = dialogItemsData.map(user => <DialogItem user={user} />);

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