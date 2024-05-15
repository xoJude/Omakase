import React, { useState } from 'react';
import "./index.css";
import logo from "../../assets/omakase-video.png";
import burger from "../../assets/bars-solid.svg";
import cross from "../../assets/xmark-solid.svg";
import fr from "../../assets/fr-flag.png";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`myHeader ${isMenuOpen ? 'active' : ''}`}>
            <div className="bloc-header">
                <a href="https://www.goma-restaurant.com/"><img src={logo} width="250px" height="80px" alt="Logo"></img></a>
                <div className="toggle-btn" onClick={toggleMenu}>
                    <img src={isMenuOpen ? cross : burger} className="burger" alt="Toggle Menu"></img>
                    <img src={isMenuOpen ? cross : burger} className="crossBurger" alt="Toggle Menu"></img>
                </div>
                <nav className={`navbar-header ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <a href='#'><li>Accueil</li></a>
                        <a href='#'><li>Galerie</li></a>
                        <a href='#'><li>Event</li></a>
                        <a href='#'><li>Contact & Réservations</li></a>
                        <img src={fr} alt='France'></img>
                        <li>Français</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
