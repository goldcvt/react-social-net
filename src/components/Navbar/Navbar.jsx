import stylesheet from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import NavbarFriendsContainer from './Friends/NavbarFriendsContainer';

const Navbar = (props) => {
    return (
        <nav className={stylesheet.nav}>
            <div className={stylesheet.item}><NavLink to="/profile" activeClassName={stylesheet.active}>Profile</NavLink></div>
            <div className={stylesheet.item}><NavLink to="/dialogs" activeClassName={stylesheet.active} >Messages</NavLink></div>
            <div className={stylesheet.item}><NavLink to="/feed" activeClassName={stylesheet.active} >Feed</NavLink></div>
            <div className={stylesheet.item}><NavLink to="/users" activeClassName={stylesheet.active}>Users</NavLink></div>
            <div className={stylesheet.item}><NavLink to="/music" activeClassName={stylesheet.active} >Music</NavLink></div>
            <div className={stylesheet.item}><NavLink to="/settings" activeClassName={stylesheet.active} >Settings</NavLink></div>
            <NavbarFriendsContainer />
        </nav>
    )
}

export default Navbar;