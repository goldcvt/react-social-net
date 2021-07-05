import stylesheet from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={stylesheet.nav}>
            <div className={stylesheet.item}><a href="#s">Profile</a></div>
            <div className={stylesheet.item}><a href="#s">Messages</a></div>
            <div className={stylesheet.item}><a href="#s">Feed</a></div>
            <div className={stylesheet.item}><a href="#s">Music</a></div>
            <div className={stylesheet.item}><a href="#s">Settings</a></div>
        </nav>
    )
}

export default Navbar;