import stylesheet from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    return (
        <div className={stylesheet.dialogs_page}>
            <div className={stylesheet.dialogs_selector}>

                <DialogItem user={{ userId: 1, name: "Brigitte Valentine" }} />
                <DialogItem user={{ userId: 2, name: "Actual Name" }} />
                <DialogItem user={{ userId: 3, name: "Not an Actual Name" }} />

            </div>
            <div className={stylesheet.dialog_window}>
                {/* Need some sort of a loader here or something */}
                <Message message="Fuck" toMe={true} />
                <Message message="I miss you!" toMe={true} />
                <Message message="Too bad." toMe={false} />
            </div>
        </div>
    );
}

export default Dialogs;