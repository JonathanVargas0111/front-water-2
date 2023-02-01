import { Link } from 'react-router-dom';
import CardServicio from '../CardServicio/cardServicio';
import './GridServicios.css'


function Servicios() {

    const servicios = [
        {
            "titleServicio": "Publicidad",
            "imgSevicio": "https://water.toryskateshop.com/wp-content/uploads/2021/09/digital-marketing-icon.png.png",
            "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },

        {
            "titleServicio": "Desarrollo",
            "imgSevicio": "https://water.toryskateshop.com/wp-content/uploads/2021/09/web-development-icon-home.png.png",
            "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },

        {
            "titleServicio": "Tecnologia",
            "imgSevicio": "https://water.toryskateshop.com/wp-content/uploads/2021/09/web-design-icon-home.png.png",
            "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
        
    ]

    return (
        <section className='servicios'>
            <Link to="Services">
                <h3 className='servicios__title'>Servicios</h3>
            </Link>
            <div className='grid__servicios'>
                {
                    servicios.map((servicio) =>
                        <CardServicio
                            key={servicio.titleServicio}
                            titleServicio={servicio.titleServicio}
                            imgSevicio={servicio.imgSevicio}
                            descripcion={servicio.descripcion}
                        ></CardServicio>
                    )
                }
            </div>
        </section>
    )
}
export default Servicios;