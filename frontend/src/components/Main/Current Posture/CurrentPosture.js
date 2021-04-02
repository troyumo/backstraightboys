import React, {Component} from "react";
import axios from "axios";

import './CurrentPosture.css';
import images from "../../../assets";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Statistics extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            notifications: [],
            date: new Date().toLocaleDateString('en-CA'),
            time: new Date().toLocaleTimeString('en-GB'),
            A_x_upper: '',
            A_z_upper: '',
            G_y_upper: '',
            A_x_lower: '',
            A_z_lower: '',
            G_y_lower: '',
            position: 0,
            settings: ''
        };
    }

    componentDidMount() {
        this.retrieveData();
        this.retrieveSettings();

        this.intervalID = setInterval(this.retrieveData.bind(this), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    updateTime() {
        let newTime = new Date().toLocaleTimeString('en-GB');
        this.setState({time: newTime})
    }

    retrieveData() {
        axios.get(`http://localhost:8000/notifications/?user=1&date=${this.state.date}`)
            .then(res => {
                this.setState({notifications: res.data});
                this.analyzeRecentData();
            })
            .catch(err => console.log(err));
    }

    retrieveSettings() {
        axios.get('http://localhost:8000/settings/?user=1')
            .then(res => {
                this.setState({settings: res.data[0]});
            })
            .catch(err => console.log(err))
    }

    analyzeRecentData() {
        this.updateTime()
        let time5delay = new Date();
        time5delay.setTime(time5delay.getTime() - 5000)
        time5delay = time5delay.toLocaleTimeString('en-GB')

        let mostRecentNotif = this.state.notifications[0]
        if (time5delay > mostRecentNotif.time) {
            this.setState({A_x_upper: 'Correct'})
            this.setState({A_z_upper: 'Correct'})
            this.setState({G_y_upper: 'Correct'})
            this.setState({A_x_lower: 'Correct'})
            this.setState({A_z_lower: 'Correct'})
            this.setState({G_y_lower: 'Correct'})
            if (this.state.settings.position === 'sitting') {
                this.setState({position: 5})
            }
            else if (this.state.settings.position === 'standing') {
                this.setState({position: 10})
            }
        }
        else if (mostRecentNotif.message === 'You are leaning forward.') {
            this.setState({A_x_upper: 'Needs Correction'})
            this.setState({A_x_lower: 'Needs Correction'})
            if (this.state.settings.position === 'sitting') {
                this.setState({position: 4})
            }
            else if (this.state.settings.position === 'standing') {
                this.setState({position: 7})
            }
        }
        else if (mostRecentNotif.message === 'You are leaning backward.') {
            this.setState({A_x_upper: 'Needs Correction'})
            this.setState({A_x_lower: 'Needs Correction'})
            if (this.state.settings.position === 'sitting') {
                this.setState({position: 3})
            }
            else if (this.state.settings.position === 'standing') {
                this.setState({position: 6})
            }
        }
        else if (mostRecentNotif.message === 'You are leaning right.') {
            this.setState({A_z_upper: 'Needs Correction'})
            this.setState({A_z_lower: 'Needs Correction'})
            if (this.state.settings.position === 'sitting') {
                this.setState({position: 2})
            }
            else if (this.state.settings.position === 'standing') {
                this.setState({position: 9})
            }
        }
        else if (mostRecentNotif.message === 'You are leaning left.') {
            this.setState({A_z_upper: 'Needs Correction'})
            this.setState({A_z_lower: 'Needs Correction'})
            if (this.state.settings.position === 'sitting') {
                this.setState({position: 1})
            }
            else if (this.state.settings.position === 'standing') {
                this.setState({position: 8})
            }
        }
        else if (mostRecentNotif.message === 'You are twisting left.') {
            this.setState({G_y_upper: 'Needs Correction'})
            this.setState({G_y_lower: 'Needs Correction'})
            this.setState({position: 11})
        }
        else if (mostRecentNotif.message === 'You are twisting right.') {
            this.setState({G_y_upper: 'Needs Correction'})
            this.setState({G_y_lower: 'Needs Correction'})
            this.setState({position: 12})
        }
        else {
            this.setState({A_x_upper: ''})
            this.setState({A_z_upper: ''})
            this.setState({G_y_upper: ''})
            this.setState({A_x_lower: ''})
            this.setState({A_z_lower: ''})
            this.setState({G_y_lower: ''})
        }
    }

    renderImage(position) {
    if (this.state.position === 1) {
        return <div>
            <img src={images.p2} alt="Sitting; Leaning Left" width={250} height={250}/>
            <p>User is leaning left.</p>
        </div>;
    }
    else if (this.state.position === 2) {
        return <div>
            <img src={images.p3} alt="Sitting; Leaning Right" width={250} height={250}/>
            <p>User is leaning right.</p>
        </div>;
    }
    else if (this.state.position === 3) {
        return <div>
            <img src={images.p4} alt="Sitting; Leaning Back" width={250} height={250}/>
            <p>User is leaning back.</p>
        </div>
    }
    else if (this.state.position === 4) {
        return <div>
            <img src={images.p5} alt="Sitting; Leaning Forward" width={250} height={250}/>
            <p>User is leaning forward.</p>
        </div>;
    }
    else if (this.state.position === 5) {
        return <div>
            <img src={images.p7} alt="Sitting; Straight" width={250} height={250}/>
            <p>User is sitting upright.</p>
        </div>;
    }
    else if (this.state.position === 6) {
        return <div>
            <img src={images.p8} alt="Standing; Leaning Back" width={250} height={250}/>
            <p>User is leaning back.</p>
        </div>;
    }
    else if (this.state.position === 7) {
        return <div>
            <img src={images.p9} alt="Standing; Leaning Forward" width={250} height={250}/>
            <p>User is leaning forward.</p>
        </div>;
    }
    else if (this.state.position === 8) {
        return <div>
            <img src={images.p10} alt="Standing; Leaning Left" width={250} height={250}/>
            <p>User is leaning left.</p>
        </div>;
    }
    else if (this.state.position === 9) {
        return <div>
            <img src={images.p11} alt="Standing; Leaning Right" width={250} height={250}/>
            <p>User is leaning right.</p>
        </div>;
    }
    else if (this.state.position === 10) {
        return <div>
            <img src={images.p12} alt="Standing; Straight" width={250} height={250}/>
            <p>User is standing straight.</p>
        </div>;
    }
    else if (this.state.position === 11) {
        return <div>
            <img src={images.p13} alt="Torsion; Left" width={250} height={250}/>
            <p>User is twisted left.</p>
        </div>;
    }
    else if (this.state.position === 12) {
        return <div>
            <img src={images.p14} alt="Torsion; Right" width={250} height={250}/>
            <p>User is twisted right.</p>
        </div>;
    }
    else {
        return <p>Error: No image found.</p>;
    }
}

    render() {
        return (
            <div className="PostureVisualizer">
                <div className="Angle">
                    <h3>Current Posture</h3>
                    <table>
                        <tbody>
                        <tr>
                            <th>Upper Back (Forward/Backward)</th>
                            <td>{this.state.A_x_upper}</td>
                        </tr>
                        <tr>
                            <th>Upper Back (Left/Right)</th>
                            <td>{this.state.A_z_upper}</td>
                        </tr>
                        <tr>
                            <th>Upper Back (Torsion)</th>
                            <td>{this.state.G_y_upper}</td>
                        </tr>
                        <tr>
                            <th>Lower Back (Forward/Backward)</th>
                            <td>{this.state.A_x_lower}</td>
                        </tr>
                        <tr>
                            <th>Lower Back (Left/Right)</th>
                            <td>{this.state.A_z_lower}</td>
                        </tr>
                        <tr>
                            <th>Lower Back (Torsion)</th>
                            <td>{this.state.G_y_lower}</td>
                        </tr>
                        </tbody>
                    </table>
                    <p>Last updated: {this.state.time}</p>
                </div>
                <div className="StickFigure">
                    {this.renderImage(this.state.position)}
                </div>
            </div>
        );
    }
}