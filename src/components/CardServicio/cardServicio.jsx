import './cardServicio.css';

export default function CardServicio({titleServicio,imgSevicio,descripcion}) {
  return (
    <div className="card-body">
        <img src={imgSevicio} alt="" className="card-img"/>
        <h4 className="card__title">{titleServicio}</h4>
        <p className="card__description">{descripcion}</p>
    </div>
  )
}
