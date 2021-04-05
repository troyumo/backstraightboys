import React, { Component } from "react";
import axios from "axios";

import './Statistics.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export default class Statistics extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            angles: [],
            notifications: [],
            numNotifs: 0,
            timeSit: '',
            timeStand: '',
            averages: {
                A_x_upper: 0,
                A_z_upper: 0,
                G_y_upper: 0,
                A_x_lower: 0,
                A_z_lower: 0,
                G_y_lower: 0,
            },
            date: new Date().toLocaleDateString('en-CA')
        };

        this.retrieveData = this.retrieveData.bind(this);
        this.calculateAverages = this.calculateAverages.bind(this);
    }

    componentDidMount() {
        this.retrieveData();

        this.intervalID = setInterval(this.retrieveData.bind(this), 60000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    retrieveData() {
        axios.get(`http://localhost:8000/angles/?user=1&date=${this.state.date}`)
            .then(res => {
                this.setState({angles: res.data});
                this.calculateAverages();
            })
            .catch(err => console.log(err));

        axios.get(`http://localhost:8000/notifications/?user=1&date=${this.state.date}`)
            .then(res => {
                this.setState({notifications: res.data});
                this.countNotifications();
            })
            .catch(err => console.log(err));
    }

    calculateAverages() {
        let data = this.state.angles;
        let avg = Array.from(data.reduce(
            (acc, obj) => Object.keys(obj).reduce(
                (acc, key) => typeof obj[key] == "number"
                    ? acc.set(key, ( // immediately invoked function:
                        ([sum, count]) => [sum + obj[key], count + 1]
                    )(acc.get(key) || [0, 0])) // pass previous value
                    : acc,
                acc),
            new Map()),
            ([name, [sum, count]]) => ({name, average: sum / count})
        )
        let i = 0;
        while (i < avg.length) {
            let name = avg[i].name;
            if (name === 'id' || name === 'user') {
                i++;
                continue
            }
            let average = avg[i].average;
            this.setState(prevState => ({
                averages: {...prevState.averages, [name]: average}
            }))
            i++;
        }
    }

    countNotifications() {
        this.setState({numNotif: this.state.notifications.length});
    }

    render() {
        return (
            <div className="bigBox">
                <h4>Daily Statistics</h4>
                <table>
                    <tbody>
                    <tr>
                        <th>Number of times notified to correct posture</th>
                        <td>{this.state.numNotif}</td>
                    </tr>
                    <tr>
                        <th>Average deviation in upper back angle (forward/backward)</th>
                        <td>{this.state.averages.A_x_upper.toFixed(2)}&#176;</td>
                    </tr>
                    <tr>
                        <th>Average deviation in upper back angle (left/right)</th>
                        <td>{this.state.averages.A_z_upper.toFixed(2)}&#176;</td>
                    </tr>
                    <tr>
                        <th>Average deviation in upper back angle (torsion)</th>
                        <td>{this.state.averages.G_y_upper.toFixed(2)}&#176;</td>
                    </tr>
                    <tr>
                        <th>Average deviation in lower back angle (forward/backward)</th>
                        <td>{this.state.averages.A_x_lower.toFixed(2)}&#176;</td>
                    </tr>
                    <tr>
                        <th>Average deviation in lower back angle (left/right)</th>
                        <td>{this.state.averages.A_z_lower.toFixed(2)}&#176;</td>
                    </tr>
                    <tr>
                        <th>Average deviation in lower back angle (torsion)</th>
                        <td>{this.state.averages.G_y_lower.toFixed(2)}&#176;</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}