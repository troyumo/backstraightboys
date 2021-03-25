import React from "react";
import './Figure.css';
import images from '../../assets'

function renderImage(position) {
        if (position === 1) {
            return <img src={images.p1} alt="First Position"/>;
        }
        else if (position === 2) {
            return <img src={images.p2} alt="Second Position"/>;
        }
        else {
            return <img src={images.p3} alt="Noneth Position"/>;
        }
    }

export default function FigureDisplay(props) {
    let posn = 0;
    return (
        <div className="StickFigure">
            {renderImage(posn)}
        </div>
    );
}