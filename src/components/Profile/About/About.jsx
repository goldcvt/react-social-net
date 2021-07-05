import stylesheet from './About.module.css';

const About = () => {
    return (
        <div className = {stylesheet.about}>
            <div>
                <img src="https://wallpaperaccess.com/full/1760835.jpg" alt="Mountain View, not California" className={stylesheet.wallpaper} />
            </div>
            <div>Ava + desc</div>
        </div>
    );
}

export default About;