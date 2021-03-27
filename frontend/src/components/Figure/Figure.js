import React from "react";
import './Figure.css';
import images from '../../assets'

function renderImage(position) {
        if (position === 1) {
            return <div>
                <img src={images.p1} alt="Standing; Straight (side view)" width={250} height={250}/>
                <p>User is standing straight.</p>
            </div>;
        }
        else if (position === 2) {
            return <div>
                <img src={images.p2} alt="Sitting; Leaning Left" width={250} height={250}/>
                <p>User is leaning left.</p>
            </div>;
        }
        else if (position === 3) {
            return <div>
                <img src={images.p3} alt="Sitting; Leaning Right" width={250} height={250}/>
                <p>User is leaning right.</p>
            </div>;
        }
        else if (position === 4) {
            return <div>
                <img src={images.p4} alt="Sitting; Leaning Back" width={250} height={250}/>
                <p>User is leaning back.</p>
            </div>
        }
        else if (position === 5) {
            return <div>
                <img src={images.p5} alt="Sitting; Leaning Forward" width={250} height={250}/>
                <p>User is leaning forward.</p>
            </div>;
        }
        else if (position === 6) {
            return <div>
                <img src={images.p6} alt="Sitting; Straight (side view)" width={250} height={250}/>
                <p>User is sitting upright.</p>
            </div>;
        }
        else if (position === 7) {
            return <div>
                <img src={images.p7} alt="Sitting; Straight" width={250} height={250}/>
                <p>User is sitting upright.</p>
            </div>;
        }
        else if (position === 8) {
            return <div>
                <img src={images.p8} alt="Standing; Leaning Back" width={250} height={250}/>
                <p>User is leaning back.</p>
            </div>;
        }
        else if (position === 9) {
            return <div>
                <img src={images.p9} alt="Standing; Leaning Forward" width={250} height={250}/>
                <p>User is leaning forward.</p>
            </div>;
        }
        else if (position === 10) {
            return <div>
                <img src={images.p10} alt="Standing; Leaning Left" width={250} height={250}/>
                <p>User is leaning left.</p>
            </div>;
        }
        else if (position === 11) {
            return <div>
                <img src={images.p11} alt="Standing; Leaning Right" width={250} height={250}/>
                <p>User is leaning right.</p>
            </div>;
        }
        else if (position === 12) {
            return <div>
                <img src={images.p12} alt="Standing; Straight" width={250} height={250}/>
                <p>User is standing straight.</p>
            </div>;
        }
        else if (position === 13) {
            return <div>
                <img src={images.p13} alt="Torsion; Left" width={250} height={250}/>
                <p>User is twisted left.</p>
            </div>;
        }
        else if (position === 14) {
            return <div>
                <img src={images.p14} alt="Torsion; Right" width={250} height={250}/>
                <p>User is twisted right.</p>
            </div>;
        }
        else if (position === 15) {
            return <div>
                <img src={images.p15} alt="No Torsion" width={250} height={250}/>
                <p>User is not twisting their body.</p>
            </div>;
        }
        else {
            return <p>Error: No image found.</p>;
        }
    }

export default function FigureDisplay(props) {
    let posn = 6;
    return (
        <div className="StickFigure">
            {renderImage(posn)}
        </div>
    );
}