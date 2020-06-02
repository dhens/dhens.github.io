import React from 'react';
import './style.css'
import headshot from '../../assets/11623868.jfif'

const AboutMe = () => {
    return (
        <div className="container">
            <div id="about" className="about-me">
                <div className="row">
                    <div className="col-lg-4 col0">
                        <img src={headshot} alt="Dawson" />
                    </div>
                    <div className="col-lg-4 col1">
                        <h3>Dawson Hensel</h3>
                        <ul className="socials">
                            <li className="social-item">
                                <a href="https://www.linkedin.com/in/dawson-hensel-2aba54195/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://github.com/dhens">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://docs.google.com/document/d/1Vr8dhKNO_onxLaEssFRl6f9meRwRlGHnEC290LKT81c/edit?usp=sharing">
                                    <i className="fas fa-file-pdf"></i>
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="mailto:dawsonhensel@gmail.com">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col2">
                        <h5>
                            I create Full Stack websites using MERN stack, MySQL, Javascript, jQuery, and Bootstrap. Email me and let's work together!
                        </h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;