export let addPost = (posts, text, author, avatarUrl, likes = 0, shares = 0) => {
    let newId = posts[posts.length - 1].id + 1;
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

export let typingPost = (curPost, text) => {
    curPost.text = text;
}

export let like = (posts, postId) => {
    let post = posts[postId]
    if (!post.liked) {
        post.likes += 1
        post.liked = true
    } else {
        post.likes -=1
        post.liked = false
    }
}
