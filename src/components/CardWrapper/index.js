import React from 'react';
import './style.css';

const CardWrapper = props => {
    return (
        <div id="projects" className="container portfolio">
            <div className="card-deck">
                {props.children}
            </div>
        </div>
    )
}

export default CardWrapper;