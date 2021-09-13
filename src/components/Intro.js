import React from "react";
import '../css/Intro.css';
import logo from "../monkey-com.gif";
export default function (){
    return(
        <div className="intro">
            <div className="hero-intro">
                <h2>Hii,</h2>
                <h2>I'm Yashvardhan </h2>
                <p>Fullstack developer</p>
                <br/>
                <br/>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/yashvardhan-60b3a5184/">
                        <i className="fab fa-linkedin fa-2x"/>
                    </a>
                    <a href="https://twitter.com/imyashvardhan19">
                        <i className="fab fa-twitter-square fa-2x" />
                    </a>
                    <a href="https://github.com/yashvardhan-verma">
                        <i className="fab fa-github-square fa-2x"/>
                    </a>
                    <a href="https://www.hackerrank.com/iamyashvardhan">
                        <i className="fab fa-hackerrank fa-2x" />
                    </a>
                    <a href="https://www.twitch.tv/yashvardhan19">
                        <i className="fab fa-twitch fa-2x" />
                    </a>

                </div>
            </div>
            <div className="hero=img">
                <img id="logo" src={logo} alt=""/>
            </div>
        </div>
    )
}