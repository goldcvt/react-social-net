export let addPost = (posts, text, author, avatarUrl, likes, shares) => {
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
    if (text === "") {
        curPost.text = curPost.text.slice(0, curPost.text.length - 1);
    } else {
        curPost.text = text;
    }
    
}
