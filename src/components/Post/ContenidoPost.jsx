import './ContenidoPost.css';
/* import ReactMarkdown from 'react-markdown'; */

export default function ContenidoPost({ title, content, img }) {
    /* const a = {
        __html: `<section className="section-content-post">
        <article className="">
            <h2>${title}</h2>
            <p>
            Si eres una persona que ya sabe algo de maquetación con HTML y CSS te podría interesar lo que
            encontraras a continuación, con este reto podrás poner aprueba tus conocimientos, hagamos un
            sitio web en el que presentemos 3 países en los que quisieras estar o visitar en alguna ocasión.
            <spam>(descripción card)</spam> 
            </p>

            <p>
            Para este proyecto deberás realizar una página sencilla sobre tres países de tu interés.
            </p>

            <p>
            Página de inicio: en esta página mostraremos un header/encabezado compuesto de un menú que
            se mantenga fijo en la parte superior con solo dos elementos Inicio y logo de su elección, una
            imagen que ocupe toda la pantalla y que tenga por encima los siguientes elementos           
            </p>

            <h3>
            Requerimientos:
            </h3>

            <p>
            Página de inicio: en esta página mostraremos un header/encabezado compuesto de un menú que
            se mantenga fijo en la parte superior con solo dos elementos Inicio y logo de su elección, una
            imagen que ocupe toda la pantalla y que tenga por encima los siguientes elementos
            </p>
            <ul>
                <li><spam>Frase: </spam>Tres lugares para visitar
                </li>
                <li><spam>Cita: </spam>“Deja tu casa. Ve solo. Viaja ligero. Lleva un mapa. Ve por tierra. Cruza a pie la
                frontera. Escribe un diario.Lee una novela sin relación con el lugar en el que estés. Evita
                usar el móvil. Haz algún amigo”– Paul Theroux</li>
                <li>Tanto el titulo como el logo deben redireccionar a la página principal.</li>
            </ul>
            <p>
                Para continuar tendrás que realizar 3 secciones cada una de estas será sobre uno de los países que
                te gustaría visitar, en cada una de estas secciones presentaras una imagen como fondo de algún
                lugar del país que te gustaría visitar, añadir en la sección el nombre del país como título el cual
                debería estar centrado tanto vertical como horizontal, justo debajo de este un botón con el texto
                “Ver más” y por ultimo el nombre del lugar de la imagen en la parte inferior al lado izquierdo, el
                botón debe redireccionar a otra pagina en la cual encontraras más información dependiendo del
                país que presiones el botón, no olvides añadir el footer con copyright y e información del
                desarrollador en este caso sería tu información.
            </p>

            <p>
                A la página la cual nos redirija después de presionar el botón “Ver más” presentara el menú como en la página inicio, una slider con más imágenes de lugares del país y más información del país.
            </p>
            <ul>
                <li>
                    Sección de Descripción sobre el país, esta sección de la página contendría como título “Descripción” y un resumen sobre este país en forma de párrafos
                </li>
                <li>
                    Sección de platos con el titulo de “Platos” y una serie de platos tradicionales con una sencilla descripción, la cantidad de platos es de libre elección. 
                </li>
                <li>
                    Sección itinerario la cual debe estar en forma de lista ordenada que lugares del país te gustaría visitar y fecha aproximada.
                </li>
            </ul>
            <p>
                No olvides añadir el footer como en la página de Inicio.
            </p>
            <h3>
                Recomendaciones
            </h3>

            <p>
                Para realizar la codificación de este diseño ten presente que desde hace un tiempo se usa el
                concepto de mobile first, el cual de forma sencilla consiste en diseñar la página primero pensada
                para pantallas reducidas como los smartphones/tables y posteriormente Desktop. Para más
                información puedes acceder a este link.
            </p>

            </article>
    </section>`}; */
    return (
        
        <div
            className="container-content"
            /* dangerouslySetInnerHTML={a} */
           dangerouslySetInnerHTML={content}
            >
            {/* 
            <ReactMarkdown children={content.attributes.Body}/> */}
        </div>
    );


}