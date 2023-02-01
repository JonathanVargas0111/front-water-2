import logoHamburguer from './hamburger-icon.svg';
import pictureDos from './youtube-picture-2.png';
import icoCerrar from './close-icon.svg';

import { Link } from "react-router-dom";

import { useState } from 'react';

function Menu() {

    const [isAtive, setIsActive] = useState(false);

    const toggleMenu = (e) => {
        if (isAtive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    }

    return (
        <nav className="topnav">
            <a href="../../pages/home.jsx" className="logo">
                <img height="50" width="50" src={pictureDos} alt="programador" />
                <div className="logotype">
                    Water code<br />
                </div>
            </a>

            <button className="open-menu" onClick={toggleMenu} aria-label="Abrir menú">
                <img src={logoHamburguer} alt="abrir menú" />
            </button>

            <ul className={!isAtive ? "menu" : "menu menu_opened"}>
                <button className="close-menu" aria-label="Cerrar menú" onClick={toggleMenu}>
                    <img src={icoCerrar} alt="cerrar menú" />
                </button>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Blog">Blog</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
