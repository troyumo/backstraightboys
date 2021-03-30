import React, { Component } from "react";
import axios from "axios";

import './SettingsPanel.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export default class SettingsPanel extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            settings: {
                sensitivity: 'medium',
                duration: 'medium',
                frequency: 'medium',
                strength: 'medium',
                position: 'sitting',
                operationMode: 'training',
                silentMode: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.retrieveSettings = this.retrieveSettings.bind(this);
    }

    componentDidMount() {
        this.retrieveSettings();
    }

    retrieveSettings() {
        axios.get('http://localhost:8000/settings/?user=1')
            .then(res => {
                this.setState({settings: res.data[0]});
            })
            .catch(err => console.log(err))
    }

    handleChange(event) {
        event.persist();
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState(prevState => ({
            settings: { ...prevState.settings, [event.target.name]: value }
        }))
    }

    handleSubmit(event) {
        axios.put(`http://localhost:8000/settings/${this.state.settings.id}/`, this.state.settings)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
        event.preventDefault();
    }

    render() {
        return (
            <div className="settings">
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Sensitivity</th>
                                <td>
                                    <select name="sensitivity" onChange={this.handleChange}
                                            value={this.state.settings.sensitivity}>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Vibration Duration</th>
                                <td>
                                    <select name="duration" onChange={this.handleChange}
                                            value={this.state.settings.duration}>
                                        <option value="short">Short</option>
                                        <option value="medium">Medium</option>
                                        <option value="long">Long</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Vibration Frequency</th>
                                <td>
                                    <select name="frequency" onChange={this.handleChange}
                                            value={this.state.settings.frequency}>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Vibration Strength</th>
                                <td>
                                    <select name="strength" onChange={this.handleChange}
                                            value={this.state.settings.strength}>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Body Position</th>
                                <td>
                                    <select name="position" onChange={this.handleChange}
                                            value={this.state.settings.position}>
                                        <option value="sitting">Sitting</option>
                                        <option value="standing">Standing</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Operation Mode</th>
                                <td>
                                    <select name="operationMode" onChange={this.handleChange}
                                            defaultValue={this.state.settings.operationMode}>
                                        <option value="training">Training</option>
                                        <option value="tracking">Tracking</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Silent Mode</th>
                                <td>
                                    <input name="silentMode"
                                           type="checkbox"
                                           onChange={this.handleChange}
                                           checked={this.state.settings.silentMode}>
                                    </input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="submit-button">
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>
        );
    }
}