import React from 'react';
import './style.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container">
            <div className="col-lg-12">
            <a className="navbar-brand" href="#about">About</a>
            <a className="navbar-brand" href="#projects">Projects</a>
            <a className="navbar-brand" href="#skills">Skills</a>

            </div>
        </div>
        </nav>
    )
}

export default Navbar;