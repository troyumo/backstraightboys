import React from "react";
import './NavigationBar.css';
import images from '../../assets'

export default function Navi() {
    return (
        <div className="topnav">
            <a className="active" href="/"><img src={images.logo} alt="BackStraight Boys" width={162} height={19}/></a>
            <a href="log.html">Log</a>
            <a href="resources.html">Resources</a>
            <a href="profile.html"><img src={images.user} alt="User" width={20} height={20}/></a>
        </div>
    );
}