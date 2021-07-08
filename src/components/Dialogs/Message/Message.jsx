import stylesheet from '../Dialogs.module.css';

const Message = (props) => {
    if (props.toMe) {
        return (
            <div className={stylesheet.message}>
                <div className={stylesheet.message__from}>{props.message}</div>
            </div>
        );
    }

    return (
        <div className={stylesheet.message}>
            <div className={stylesheet.message__to}>{props.message}</div>
        </div>
    );
}

export default Message;