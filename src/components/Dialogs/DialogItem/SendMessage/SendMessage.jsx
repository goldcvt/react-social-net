import stylesheet from './SendMessage.module.css';

const SendMessage = (props) => {
    return (
        <div className={stylesheet.container}>
            <div className={stylesheet.field}>
                <input type="text" />
            </div>
            <div className={stylesheet.button_wrapper}>
                <button className={stylesheet.button}>
                    >
                </button>
            </div>
        </div>
    )
}

export default SendMessage;