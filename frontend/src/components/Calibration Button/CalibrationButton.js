import React, { Component } from "react";
import Modal from './Modal';

class CalibrationButton extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    startCalibration = () => {
        this.showModal();
        // Timer().restartTimer
    };

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    render() {
        return (
            <div className="button">
                <Modal show={this.state.show} handleClose={this.hideModal}/>
                <button type="button" onClick={this.showModal}>
                    Start Calibration
                </button>
            </div>
        );
    }
}

export default CalibrationButton