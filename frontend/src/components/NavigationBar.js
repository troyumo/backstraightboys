import React from "react";
import './NavigationBar.css';
import logo from './logo.png';

export default function Navi() {
    return (
        <div class="topnav">
            <a className="active" href="/">
                <img src={logo} alt="BackStraight Boys" width={162} height={19}></img></a>
            <a href="log.html">Log</a>
            <a href="resources.html">Resources</a>
        </div>
    );
}