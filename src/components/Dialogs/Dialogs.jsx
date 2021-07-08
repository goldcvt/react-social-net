import stylesheet from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogOverview = (props) => {
    return (
        <NavLink className={stylesheet.dialog__link} activeClassName={stylesheet.dialog__current} to={`/dialogs/${props.userId}`}>
            <div className={stylesheet.dialog}>
                {props.name}
            </div>
        </NavLink>
    );
}

const Dialogs = (props) => {
    return (
        <div className={stylesheet.dialogs_page}>
            <div className={stylesheet.dialogs_selector}>

                <DialogOverview userId={1} name="Brigitte Valentine" />
                <DialogOverview userId={2} name="Actual Name" />
                <DialogOverview userId={3} name="Not an Actual Name" />

            </div>
            <div className={stylesheet.dialog_window}>
                <div className={stylesheet.message}>
                    <div className={stylesheet.message__from}>Fuck</div>
                </div>
                <div className={stylesheet.message}>
                    <div className={stylesheet.message__from}>I miss you!</div>
                </div>
                <div className={stylesheet.message}>
                    <div className={stylesheet.message__to}>Too bad.</div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;