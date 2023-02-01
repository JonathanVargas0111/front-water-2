import logoHamburguer from './hamburger-icon.svg';
import pictureDos from './youtube-picture-2.png';
import icoCerrar from './close-icon.svg';

import { Link } from "react-router-dom";

import { useState } from 'react';

import './Menu.css';

function Menu() {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = (e) => {
        setIsActive(!isActive);
    }

    return (
        <nav className="topnav">
            <div className="container-btns">
                <a href="/" className="logo">
                    <img height="50" width="50" src={pictureDos} alt="programador" className='logo__img' />
                    <div className="logotype">
                        Water code<br />
                    </div>
                </a>
                {
                    !isActive ?
                        <button className="btn-open-menu" onClick={toggleMenu} aria-label="Abrir menú">
                            <img src={logoHamburguer} alt="abrir menú" />
                        </button>
                        :
                        <button className="btn-close-menu" aria-label="Cerrar menú" onClick={toggleMenu}>
                            <img src={icoCerrar} alt="cerrar menú" />
                        </button>
                }
            </div>
            <ul className={!isActive ? "menu menu__close" : "menu menu__open"}>
                <li className="menu__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="menu__item">
                    <Link to="/Projects">Portafolio</Link>
                </li>
                <li className="menu__item">
                    <Link to="/Blog">Blog</Link>
                </li>
                <li className="menu__item">
                    <Link to="/About">About</Link>
                </li>
                <li className="menu__item">
                    <Link to="/Contact">Contact</Link>
                </li>
               
            </ul>
        </nav>
    );
}

export default Menu;
