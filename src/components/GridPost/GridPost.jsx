import './GridPost.css';
import CardNew from '../CardPost/CardPost';

import { useState, useEffect } from 'react';
import { getMedia} from '../../helpers/CrudW';

export default function GridPost({ listPosts }) {

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(false);        
    }, []);

    if (isLoading) { <h1>Cargando...</h1>; }
    /* const [imgPost, setImgPost] = useState("");  */

    return (
        <div className="grid-post">
            {
                listPosts.map((post) => {
                    /* getMedia(post.id).then((res)=>{
                        setImgPost(res);
                    })  */                    
                    return <CardNew
                        key={post.id}
                        id={post.id}
                        titleNew={post.title.rendered}  
                        descriptionNew={post.excerpt.rendered}
                        imgPost ={                            
                            post._embedded["wp:featuredmedia"] === undefined ? 
                            undefined
                            : post._embedded["wp:featuredmedia"][0].source_url
                        }
                        listTecnologies = {post.tags}
                    ></CardNew>
                })
            }
        </div>
    )
};