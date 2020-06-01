import React from 'react';
import './style.css'

function ProjectCard(props) {
    return (
        <div className="card">
            <img src={props.thumbnailPath} className="card-img-top" alt={props.thumbnailAlt} />
            <div className="card-body">
                <h1 className="card-title">{props.title}</h1>
                <div className="card-details">
                    <p>
                        {props.text0}
                    </p>
                    <p>
                        {props.text1}
                    </p>
                    <p>
                        {props.text2}
                    </p>
                </div>
                <ul>
                    {props.features}
                </ul>
                <div className="row project-links text-center">
                    <div className="col-lg-6">
                        <a href={props.githubURL}>
                            <button>
                                <i className="fab fa-github"></i>
                                Repository
                        </button>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href={props.siteURL}>
                            <button>
                                <i className="fas fa-server"></i>
                                    Live Site
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;