import stylesheet from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <nav className={stylesheet.nav}>
            <div className={stylesheet.item}><a href="/profile">Profile</a></div>
            <div className={stylesheet.item}><a href="/dialogs">Messages</a></div>
            <div className={stylesheet.item}><a href="/feed">Feed</a></div>
            <div className={stylesheet.item}><a href="/music">Music</a></div>
            <div className={stylesheet.item}><a href="/settings">Settings</a></div>
        </nav>
    )
}

export default Navbar;