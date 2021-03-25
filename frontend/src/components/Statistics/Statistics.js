import React from "react";
import './Statistics.css';

export default function Statistics() {

    return (
        <div className="bigBox">
            <h4>Daily Statistics</h4>
            <table>
                <tbody>
                    <tr>
                        <th>Number of times notified to correct posture</th>
                        <td>#</td>
                    </tr>
                    <tr>
                        <th>Time spent sitting</th>
                        <td>#h#m</td>
                    </tr>
                    <tr>
                        <th>Time spent standing</th>
                        <td>#h#min</td>
                    </tr>
                    <tr>
                        <th>Average upper back angle (forward/backward)</th>
                        <td>Some Angle</td>
                    </tr>
                    <tr>
                        <th>Average upper back angle (left/right)</th>
                        <td>Some Angle</td>
                    </tr>
                    <tr>
                        <th>Average upper back angle (torsion)</th>
                        <td>Some Angle</td>
                    </tr>
                    <tr>
                        <th>Average lower back angle (forward/backward)</th>
                        <td>Some Angle</td>
                    </tr>
                    <tr>
                        <th>Average lower back angle (left/right)</th>
                        <td>Some Angle</td>
                    </tr>
                    <tr>
                        <th>Average lower back angle (torsion)</th>
                        <td>Some Angle</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}