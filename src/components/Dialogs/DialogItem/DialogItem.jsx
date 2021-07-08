import stylesheet from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let { userId, name } = props.user;
    return (
        <NavLink className={stylesheet.dialog__link} activeClassName={stylesheet.dialog__current} to={`/dialogs/${userId}`}>
            <div className={stylesheet.dialog}>
                {name}
            </div>
        </NavLink>
    );
}

export default DialogItem;