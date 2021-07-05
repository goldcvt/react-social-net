import stylesheet from './Post.module.css';

const Post = () => {
    return (
        <div className={stylesheet.post}>
            <div className={stylesheet.post_content}>
                <img src='https://i.ytimg.com/vi/BHPPLdWeGiw/maxresdefault.jpg' alt="Author's Avatar" className={stylesheet.avatar} />
                <p className={stylesheet.post_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati illum molestias quidem quis non nesciunt soluta! Eligendi, nulla illum. Facilis aliquam ducimus voluptatum aspernatur dolores ullam sequi id aut!</p>
            </div>
            <div className={stylesheet.nav}>
                <span>Like</span>
                <span>Share</span>
            </div>
        </div>
    );
}

export default Post;