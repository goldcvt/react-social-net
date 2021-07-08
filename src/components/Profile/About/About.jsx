import stylesheet from './About.module.css';

const About = (props) => {
    return (
        <div className={stylesheet.about}>
            <div className={stylesheet.wallpaper}>
                <img src="https://wallpaperaccess.com/full/1760835.jpg" alt="Mountain View, not California" className={stylesheet.wallpaper} />
            </div>
            <div className={stylesheet.name}>
                <h1>Ragnar Lodbrok</h1>
            </div>

            <div className={stylesheet.avatar_container}>
                <img src="https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg" alt="Beautiful Person" />
            </div>
            <div className={stylesheet.user_info_text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nihil ad adipisci illo fugit asperiores officia iste itaque, praesentium accusantium
                laboriosam saepe tempora temporibus. Et incidunt architecto quaerat? Dolore, maxime itaque!
            </div>

        </div>
    );
}

export default About;