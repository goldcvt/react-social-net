import stylesheet from './Post.module.css';

const Post = (props) => {
    return (
        <div className={stylesheet.post}>
            <div className={stylesheet.post_content}>
                <div className={stylesheet.author}>
                    <img src={props.author_avatar} alt="Author's Avatar" className={stylesheet.avatar} />
                    <div className={stylesheet.name}>
                        <p>
                            {props.author}
                        </p>
                    </div>
                </div>
                <p className={stylesheet.post_text}>{props.text}</p>
            </div>
            <div className={stylesheet.nav}>
                <span>Like {props.likes}</span>
                <span>Share {props.shares}</span>
            </div>
        </div>
    );
}

export default Post;