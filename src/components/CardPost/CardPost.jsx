import './CardPost.css';
import { Link } from 'react-router-dom';

const imgCardDefault = "https://programacion.net/files/article/20161110041116_image-not-found.png"

export default function CardNew({ id, titleNew, descriptionNew, imgPost, listTecnologies }) {

  const listItems = ((list) => {
    return list.map((list) =>
      <li key={list.toString()} className="card-post__tecnology">
        {list}
      </li>
    );
  })

  return (
    <div className="card-post">
      <Link to={`/Post/${id}`} >
        <div className='card__container-img'>
          {
            imgPost === undefined ?
              <img src={imgCardDefault} alt={titleNew} className="card-post__image" />
              :
              <img src={imgPost} alt={titleNew} className="card-post__image" />
          }
        </div>
      </Link>
      <h2 className="card-post__title">{titleNew}</h2>
      <div className="card-post__info card-post__text">
        <p className="card-post__text">{descriptionNew}</p>
      </div>
      <ul className="card-post__technologies">
        {
          listTecnologies === undefined ?
            <></>
            :
            listItems(listTecnologies)
        }
      </ul>
    </div>
  )
}