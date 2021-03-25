import React from "react";
import './Angle.css';

export default function AngleDisplay() {
    // function getAngles() {
    //     // do something
    // }

    return (
        <div className="Angle">
            <h3>Current Posture</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Upper Back (Forward/Backward)</th>
                        <td>Correct/Needs Correction</td>
                    </tr>
                    <tr>
                        <th>Upper Back (Left/Right)</th>
                        <td>Correct/Needs Correction</td>
                    </tr>
                    <tr>
                        <th>Upper Back (Torsion)</th>
                        <td>Correct/Needs Correction</td>
                    </tr>
                    <tr>
                        <th>Lower Back (Forward/Backward)</th>
                        <td>Correct/Needs Correction</td>
                    </tr>
                    <tr>
                        <th>Lower Back (Left/Right)</th>
                        <td>Correct/Needs Correction</td>
                    </tr>
                    <tr>
                        <th>Lower Back (Torsion)</th>
                        <td>Correct/Needs Correction</td>
                    </tr>
                </tbody>
            </table>
            <p>Last updated: time</p>
        </div>
    );
}

        // <div className="Angle">
        //     <h3>Current Posture</h3>
        //     <table>
        //         <tr>
        //             <th>Upper Back (Angle: X Direction)</th> {/*find better description than X direction*/}
        //             <td>Some Angle</td>
        //         </tr>
        //         <tr>
        //             <th>Upper Back (Angle: Z Direction)</th> {/*find better description than Z direction*/}
        //             <td>Some Angle</td>
        //         </tr>
        //         <tr>
        //             <th>Upper Back (Torsion: Y Direction)</th> {/*find better description than X direction*/}
        //             <td>Some Angle</td>
        //         </tr>
        //         <tr>
        //             <th>Lower Back (Angle: X Direction)</th> {/*find better description than X direction*/}
        //             <td>Some Angle</td>
        //         </tr>
        //         <tr>
        //             <th>Lower Back (Angle: Z Direction)</th> {/*find better description than Z direction*/}
        //             <td>Some Angle</td>
        //         </tr>
        //         <tr>
        //             <th>Lower Back (Torsion: Y Direction)</th> {/*find better description than X direction*/}
        //             <td>Some Angle</td>
        //         </tr>
        //     </table>
        // </div>