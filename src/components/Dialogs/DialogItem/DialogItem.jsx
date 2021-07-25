import stylesheet from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let { id, name, avatarUrl } = props.user;
    return (
        <NavLink className={stylesheet.dialog__link} activeClassName={stylesheet.dialog__current} to={`/dialogs/${id}`}>
            <div className={stylesheet.dialog}>
                <div className={stylesheet.user__avatar}>
                    <img src={avatarUrl} alt={name} />
                </div>
                <span className={stylesheet.user__name}>{name}</span>
            </div>
        </NavLink>
    );
}

export default DialogItem;