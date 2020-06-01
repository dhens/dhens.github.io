import React from 'react';
import './style.css'

function Navbar() {
    return (
        <div className="container top-bar">
            <div className="row text-center">
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
        </div>

    )
}

export default Navbar;