import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Janavi V</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
