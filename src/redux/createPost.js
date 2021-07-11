let createPost = (posts, text, author, avatarUrl, likes, shares) => {
    let newId = posts[posts.length - 1].id;
    let post = {
        id: newId,
        text: text,
        author: author,
        avatarUrl: avatarUrl,
        likes: likes,
        shares: shares
    };
    posts.push(post);
}

export default createPost;