import React from 'react';
import './style.css'
import headshot from '../../assets/11623868.jfif'

function AboutMe() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 about-me">
                    <img src={headshot} alt="Dawson" />
                    <h3>Dawson Hensel</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;