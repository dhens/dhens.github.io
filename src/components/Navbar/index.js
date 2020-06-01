import React from 'react';
import './style.css'

function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div class="container">
                    <div className="col-lg-4">
                        <h6>ABOUT</h6>
                    </div>
                    <div className="col-lg-4">
                        <h6>PORTFOLIO</h6>
                    </div>
                    <div className="col-lg-4">
                        <h6>CONTACT</h6>
                    </div>
                </div>
        </nav>

    )
}

export default Navbar;