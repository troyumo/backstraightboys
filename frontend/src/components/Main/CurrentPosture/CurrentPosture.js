import React from "react";
import './CurrentPosture.css';

export default function CurrentPosture() {
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