import React from 'react';
import './style.css'
import js from '../../assets/ico/js.png';
import react from '../../assets/ico/react.png'
import node from '../../assets/ico/node.png'
import mongo from '../../assets/ico/mongo.png'
import boot from '../../assets//ico/boot.png'
import html from '../../assets/ico/html.png'
import css from '../../assets/ico/css.png'
import sql from  '../../assets/ico/mysql.png'
import heroku from '../../assets/ico/heroku.png'
import express from '../../assets/ico/express.png'

const Skills = () => {
    return (
        <div id="skills" className="container text-center skills">
            <h1 className="skills-title">Tools & Technologies</h1>
            <div className="skill-icon-container">
                <h2>Frontend</h2>
                <h2>Backend</h2>

                <div className="skill-icon">
                    <img src={html} alt="html5"/>
                    <img src={css} alt="css3"/>
                    <img src={js} alt="javascript"/>
                    <img src={react} alt="react"></img>
                    <img src={boot} alt="bootstrap"></img>
                </div>
                <div className="skill-icon">
                <img src={node} alt="nodejs"/>
                <img src={sql} alt="mysql"/>
                <img src={heroku} alt="heroku"/>
                <img width="64px" height="64px" src={express} alt="express"/>
                <img src={mongo} alt="mongo"></img>
                </div>
            </div>
            <ul>

            </ul>
        </div>
    )
}

export default Skills;