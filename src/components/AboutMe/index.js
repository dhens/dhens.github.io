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
                                <div title="LinkedIn">
                                    <a href="https://www.linkedin.com/in/dawson-hensel-2aba54195/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </div>
                            </li>
                            <li className="social-item">
                                <div title="GitHub">
                                    <a href="https://github.com/dhens">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </li>
                            <li className="social-item">
                                <div title="Resume">
                                    <a href="https://docs.google.com/document/d/1Vr8dhKNO_onxLaEssFRl6f9meRwRlGHnEC290LKT81c/edit?usp=sharing">
                                        <i class="fas fa-file-alt"></i>
                                    </a>
                                </div>
                            </li>
                            <li className="social-item">
                                <div title="Email">
                                    <a href="mailto:dawsonhensel@gmail.com?subject=Business%20Inquiry%20from%20Your%20Portfolio">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col2">
                        <h5>
                            I create Full Stack web applications using MERN, MySQL, Javascript, jQuery, and Bootstrap. Email me and let's work together!
                        </h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;