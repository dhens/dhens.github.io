import React from 'react';
import './style.css'

function ProjectCard(props) {
    return (
        <div className="card">
            <img src={props.thumbnailPath} className="card-img-top" alt={props.thumbnailAlt}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p>
                       {props.text0}
                    </p>
                    <p>
                       {props.text1}
                    </p>
                    <p>
                       {props.text2}
                    </p>
                    <ul>
                        {props.features}
                    </ul>
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
                    <p className="card-text"><small className="text-muted"></small></p>
                </div>
        </div>
    )
}

export default ProjectCard;