const urlPost = "https://water.toryskateshop.com/wp-json/wp/v2/posts/";

const getPosts = async () => {
    const url = "https://water.toryskateshop.com/wp-json/wp/v2/posts?_embed";
    const res = await fetch(url, { mode: 'cors' });
    const posts = await res.json();
    return posts;
}

const getPost = async (postId) => {
    const url = "https://water.toryskateshop.com/wp-json/wp/v2/posts/" + postId;
    const res = await fetch(url, { mode: 'cors' });
    const post = await res.json();
    return post;
}

const getMedia = async (postId) => {
    const url = urlPost+postId;
    const res = await fetch(url, { mode: 'cors' });
    const post = await res.json();
    const urlLinkMedia = post["_links"]["wp:featuredmedia"][0].href;
    const resImg = await fetch("https://water.toryskateshop.com/index.php/wp-json/wp/v2/media/44",{mode:'cors'})
    console.log(resImg)

    return post.author
    //return "https://water.toryskateshop.com/wp-content/uploads/2022/05/descarga-1.jpg";
}

module.exports = { getPosts, getPost, getMedia };
