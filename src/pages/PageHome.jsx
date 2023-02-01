import Header from '../components/Header';
import Menu from '../components/Menu/Menu.jsx';
import GridServicios from '../components/GridServicios/GridServicios';
import GridPostNews from '../components/GridPostNews/GridPostNews';
import TemplateBasic from '../components/TemplateBasic/TemplateBasic'

function PageHome() {
    return ( 
        <div> 
            <TemplateBasic>
                <Header></Header>
                <GridServicios></GridServicios>
                <GridPostNews
                    title="PORTAFOLIO"
                    text="Con nuestros sitios web inspiran y motivan la acción a través de elementos visuales llamativos y una narración exquisita."
                ></GridPostNews>
                <GridPostNews
                    title="BLOG"
                    text="Vuelve cada semana para ver artículos inspiradores que te ayuden a construir y expandir tu presencia digital."
                ></GridPostNews>
            </TemplateBasic>
        </div>
    );
}

export default PageHome;