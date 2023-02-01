import '../pages/PageBlog.css';
import GridPost from '../components/GridPost/GridPost';
import TemplateBasic from '../components/TemplateBasic/TemplateBasic';
import MenuAside from '../components/MenuAside/MenuAside';
import { getPosts } from '../helpers/CrudW';

import { useState, useEffect } from 'react';

export default function PageBlog() {
    const [data,setData] = useState([])
    const [listPosts, setListPosts] = useState([]);

    useEffect(() => {
        try {
            updateListPostsWordpress();
        } catch (e) {
            console.error(e)
        }
    }, []);

    const updateListPostsWordpress = () => {
        getPosts().then(newPost => {
            setData(newPost)
            setListPosts(newPost)
        })
    }
    /*  const updateListPostsStrapi = ()=>{getPosts().then((newPosts)=>{setListPosts(newPosts);})} */

    const filterForCategory = ((e)=>{
        const valueSearch = e.target.value;
        const filt = data.filter(post=>post?.categories[0]===valueSearch);
        setListPosts(filt)        
    });
    
    return (
        <>
           <TemplateBasic>
            <input type="button" value="9" onClick={filterForCategory}/>
            <input type="button" value="6" onClick={filterForCategory}/>
            <input type="button" value="2" onClick={filterForCategory}/>
                <main className="main-page-blog">
                 {/*    <div className="main__aside">
                        <MenuAside />
                    </div> */}
                    <GridPost listPosts={listPosts}/>
                </main>
           </TemplateBasic>
        </>
    )

}