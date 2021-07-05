import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='item'><a href="#s">Profile</a></div>
            <div className='item'><a href="#s">Messages</a></div>
            <div className='item'><a href="#s">Feed</a></div>
            <div className='item'><a href="#s">Music</a></div>
            <div className='item'><a href="#s">Settings</a></div>
        </nav>
    )
}

export default Navbar;