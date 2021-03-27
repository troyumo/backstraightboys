import React from "react";
import './SettingsPanel.css'

export default class SettingsPanel extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            sensitivity: 'medium',
            duration: 'medium',
            frequency: 'medium',
            strength: 'medium',
            position: 'sitting',
            operationMode: 'training',
            silentMode: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        console.log('value is: ' + value + '\nand name is: ' + event.target.name);
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit(event) {
        alert('You have made the following selections:' +
            '\nSensitivity: '+ this.state.sensitivity +
            '\nNotification Duration: ' + this.state.duration +
            '\nNotification Frequency: ' + this.state.frequency +
            '\nNotification Strength: ' + this.state.strength +
            '\nBody Position: ' + this.state.position +
            '\nOperation Mode: ' + this.state.operationMode +
            '\nSilent Mode: ' + this.state.silentMode);
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
                                    <select name="sensitivity" onChange={this.handleChange}>
                                        <option value="low">Low</option>
                                        <option selected value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Vibration Duration</th>
                                <td>
                                    <select name="duration" onChange={this.handleChange}>
                                        <option value="short">Short</option>
                                        <option selected value="medium">Medium</option>
                                        <option value="long">Long</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Vibration Frequency</th>
                                <td>
                                    <select name="frequency" onChange={this.handleChange}>
                                        <option value="low">Low</option>
                                        <option selected value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Vibration Strength</th>
                                <td>
                                    <select name="strength" onChange={this.handleChange}>
                                        <option value="low">Low</option>
                                        <option selected value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Body Position</th>
                                <td>
                                    <select name="position" onChange={this.handleChange}>
                                        <option selected value="sitting">Sitting</option>
                                        <option value="standing">Standing</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Operation Mode</th>
                                <td>
                                    <select name="operationMode" onChange={this.handleChange}>
                                        <option selected value="training">Training</option>
                                        <option value="tracking">Tracking</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Silent Mode</th>
                                <td>
                                    <input name="silentMode"
                                           type="checkbox"
                                           onChange={this.handleChange}>
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