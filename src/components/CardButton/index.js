import React from 'react';
import './style.css';

const CardButton = props => {
    return (
        <div className="project-links text-center">
            <a href={props.githubURL}>
                <button>
                    <i className="fab fa-github"></i>
                        Repository
                </button>
            </a>
            <a href={props.siteURL}>
                <button>
                    <i className="fas fa-server"></i>
                        Live Site
                </button>
            </a>
        </div>
    )
}

export default CardButton;