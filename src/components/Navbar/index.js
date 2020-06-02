import React from 'react';
import './style.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#about">About</a>
            <a className="navbar-brand" href="#projects">Projects</a>
            <a className="navbar-brand" href="#contact">Contact</a>
        </nav>
    )
}

export default Navbar;