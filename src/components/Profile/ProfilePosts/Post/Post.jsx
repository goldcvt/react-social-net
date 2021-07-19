import stylesheet from './Post.module.css';

const Post = (props) => {

    return (
        <div className={stylesheet.post}>
            <div className={stylesheet.post_content}>
                <div className={stylesheet.author}>
                    <img src={props.post.avatarUrl} alt="Author's Avatar" className={stylesheet.avatar} />
                    <div className={stylesheet.name}>
                        <p>
                            {props.post.author}
                        </p>
                    </div>
                </div>
                <p className={stylesheet.post_text}>{props.post.text}</p>
            </div>
            <div className={stylesheet.nav}>
                {/*add like coloring*/}
                <span onClick={props.like}>Like {props.post.likes}</span>
                <span>Share {props.post.shares}</span>
            </div>
        </div>
    );
}

export default Post;