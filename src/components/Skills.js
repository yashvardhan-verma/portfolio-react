import React from "react";
import '../css/Skills.css';
import html from '../svg/html5.png';
import css from '../svg/css.png';
import javascript from '../svg/javascript.png';
import java from '../svg/java.png';
import python from '../svg/python.png';
import arduino from '../svg/arduino.png';
import bootstrap from '../svg/bootstrap.png';
import clang from '../svg/c.png';
import express from '../svg/express.png';
import mongo from '../svg/mongo.png';
import node from '../svg/node.png';
import sql from '../svg/sql.png';

export default function () {
    return [
        <div className="container">
            <div className="title">
                <h1>My Tech Stack</h1>
                <h1>My Skills</h1>
            </div>

            <div className="skill-set">
                <div className="frontend">
                    <div className="flex-1">
                        <img src={html} alt="" className="front-png"/>
                        <img src={css} alt="" className="front-png"/>
                        <img src={javascript} alt="" className="front-png"/>
                        <img src={bootstrap} alt="" className="front-png"/>
                    </div>
                    <div className="flex-1">
                        <img src={node} alt="" className="front-png"/>
                        <img src={express} alt="" className="front-png"/>
                        <img src={sql} alt="" className="front-png"/>
                        <img src={mongo} alt="" className="front-png"/>
                    </div>
                    <div className="flex-1">
                        <img src={clang} alt="" className="front-png"/>
                        <img src={python} alt="" className="front-png"/>
                        <img src={java} alt="" className="front-png"/>
                        <img src={arduino} alt="" className="front-png"/>
                    </div>
                </div>
                <div className="skill-meter">
                    <div className="progress">
                        <label htmlFor="file"><h3>Web Dev</h3></label>
                        <progress max="100" value="80" />
                    </div>
                    <div className="progress">
                        <label htmlFor="file"><h3>Programming</h3></label>
                        <progress max="100" value="90" />
                    </div>
                    <div className="progress">
                        <label htmlFor="file"><h3>Databases</h3></label>
                        <progress max="100" value="85" />
                    </div>
                </div>
            </div>
        </div>
    ]
}