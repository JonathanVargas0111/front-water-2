const urlStrapi = "http://localhost:1337/api/articles"

const getPosts = async () => {
    const url = urlStrapi;
    const res = await fetch(url, { mode: 'cors' });
    const posts = await res.json();
    return posts;
}

const getPost = async (postId) => {
    try {
        const url = urlStrapi + postId;
        const res = await fetch(url, { mode: 'cors' });
        const post = await res.json;
        return post;
    } catch (e) {
        console.error(e)
    }
}

module.exports = { getPosts, getPost };