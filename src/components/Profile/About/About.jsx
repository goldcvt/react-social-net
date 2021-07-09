import stylesheet from './About.module.css';

// Separate these hardcoded thingies
const About = (props) => {
    return (
        <div className={stylesheet.about}>
            <div className={stylesheet.wallpaper}>
                <img src={ props.user.wallpaperUrl } alt="Sorry, we can't load your fav background :(" className={stylesheet.wallpaper} />
            </div>
            <div className={stylesheet.name}>
                <h1>{ props.user.name }</h1>
            </div>

            <div className={stylesheet.avatar_container}>
                <img src={props.user.avatarUrl} alt="Beautiful Person" />
            </div>
            <div className={stylesheet.user_info_text}>
                {props.user.description}
            </div>

        </div>
    );
}

export default About;