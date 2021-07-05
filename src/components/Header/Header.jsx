import stylesheet from './Header.module.css';

const Header = () => {
    return (
        <header className={stylesheet.header}>
            <img alt='Wow!' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png' className='app-logo' />
        </header>
    )
}

export default Header;