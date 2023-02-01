import arrowRight from './arrow-right.svg';
import arrowDown from './arrow-down.svg';
import { useState } from 'react';
import './MenuAside.css';
function MenuAside() {
    const [isActive, setIsActive] = useState(true);
    const toggleMenu = (e) => {
        setIsActive(!isActive);
    }

    return (
        <aside className="container-aside">
                <div className="container-btns-aside">
                    <p className="title-filter">Categorias</p>
                    {
                        !isActive ?
                            <button className="btn-open-menu-aside" onClick={toggleMenu} aria-label="Abrir menú">
                                <img src={arrowRight} alt="abrir menú" />
                            </button>
                            :
                            <button className="btn-close-menu-aside" aria-label="Cerrar menú" onClick={toggleMenu}>
                                <img src={arrowDown} alt="cerrar menú" />
                            </button>
                    }
                </div>
                <div className={isActive? "cont-filter aside__close":"aside__open"}>
                    <ul className="container-menu-aside">
                        <li className='aside__item'>News</li>
                        <li className='aside__item'>Retos</li>
                        <li className='aside__item'>Soluciones</li>
                        <li className='aside__item'>Tecnologias</li>
                        <li className='aside__item'>Otros</li>
                    </ul>
                </div>
        </aside>
    );
}

export default MenuAside;
