import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="site-navigation">
            <div className="wrapper">
                <div className="logo">
                    DOTORY
                </div>
                <nav className="nav-menu">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;