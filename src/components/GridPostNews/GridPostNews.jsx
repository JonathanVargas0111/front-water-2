import { Link } from "react-router-dom";
import CardNew from "../CardPost/CardPost";
/* import './cardNew.css'; */
import './GridPostNews.css'

function News({title, text}) {
    const posts = [
        {
            "id":"1",
            "titlePost": "NFT preview card component",
            "descriptionShort": "Elaboracion de un NFT card component",
            "imgPost": "https://soyjuanluis.com/wp-content/uploads/2019/08/los-mejores-banco-de-imagenes-y-fotos-para-descargar-gratis.png"
        },{
            "id":"2",
            "titlePost": "NFT preview card component",
            "descriptionShort": "Elaboracion de un NFT card component, Elaboracion de un NFT card component",
            "imgPost": "https://images.pexels.com/photos/9869132/pexels-photo-9869132.jpeg"
        },{
            "id":"3",
            "titlePost": "NFT preview card component",
            "descriptionShort": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis alias, laborum ipsa perspiciatis nemo blanditiis mollitia doloremque dolore natus eveniet quis optio cumque sequi ipsum non laboriosam, nesciunt odit.       Sequi, nam ex enim debitis repellat dicta. Eligendi ipsa vel dignissimos sequi odit dicta hic ipsam atque molestiae, beatae doloribus, rem incidunt vitae quae aperiam deserunt perspiciatis voluptatum, aliquid culpa? Qui quibusdam, repellat, perspiciatis quas quis voluptatibus amet tempora et quia facilis ipsam cupiditate maiores debitis? Iste amet harum iusto recusandae veritatis neque eveniet voluptas quas tenetur placeat.",            
            "imgPost": "https://soyjuanluis.com/wp-content/uploads/2019/08/los-mejores-banco-de-imagenes-y-fotos-para-descargar-gratis.png"
        },{
            "id":"4",
            "titlePost": "NFT preview card component",
            "descriptionShort": "Elaboracion de un NFT card component",
            "imgPost": "https://soyjuanluis.com/wp-content/uploads/2019/08/los-mejores-banco-de-imagenes-y-fotos-para-descargar-gratis.png"
        }
    ]

    return (
        <section className="news-posts">
            <Link to="/Projects">
                <h2 className="new-posts__title">{title}</h2>
            </Link>
            <h4 className="new-posts__text">{text}</h4>
            <article className="news-posts__grid">
                {
                    posts.map((post) =>
                        <CardNew
                            key={post.id}
                            titleNew={post.titlePost}
                            descriptionNew={post.descriptionShort}
                            imgNew={post.imgPost}
                        ></CardNew>
                    )
                }

            </article>
        </section>
    )
}

export default News;