import React from 'react';
import './style.css'
import js from '../../assets/ico/js.png';
import react from '../../assets/ico/react.png'
import node from '../../assets/ico/node.png'
import mongo from '../../assets/ico/mongo.png'
import boot from '../../assets//ico/boot.png'

const Skills = () => {
    return (
        <div id="skills" className="container text-center skills">
            <h1 className="skills-title">Tools & Technologies</h1>
            <div className="skill-icon-container">
                <h2>Frontend</h2>
                <h2>Backend</h2>

                <div className="skill-icon">
                    <img src={node} alt="nodejs"/>
                    <img src={js} alt="javascript"/>
                    <img src={react} alt="react"></img>
                    <img src={mongo} alt="mongo"></img>
                    <img src={boot} alt="bootstrap"></img>
                </div>
            </div>
            <ul>

            </ul>
        </div>
    )
}

export default Skills;