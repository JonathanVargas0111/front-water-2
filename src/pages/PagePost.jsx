import ContenidoPost from '../components/Post/ContenidoPost';
import TemplateBasic from '../components/TemplateBasic/TemplateBasic'
import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getPost } from '../helpers/CrudW';

function PagePost() {
    const [post, setPost] = useState();
    const { postSlug } = useParams();

    useEffect(() => {       
        updatePost();
        async function updatePost(){
            try {
                getPost(postSlug)
                    .then((newPost) => {
                        const rendered = newPost.content.rendered;
                        setPost({ __html: `${rendered}` });
                    })
            }
            catch (e) {
            }
        }
    }, [post, postSlug]);

    return (
        <>
            <TemplateBasic>
                <ContenidoPost content={post} title={post}></ContenidoPost>
            </TemplateBasic>
        </>
    );
}

export default PagePost;