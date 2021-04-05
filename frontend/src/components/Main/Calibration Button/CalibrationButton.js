import React, { Component } from "react";
import Modal from './Modal';
import Timer from './Timer'

class CalibrationButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }


    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    render() {
        return (
            <div className="button">
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <h3>Sit up straight, it's time to calibrate!</h3>
                    <p>
                        The device will calibrate for 10 seconds.<br/>
                        Visit the resources page for a visualization of how to sit with proper posture.
                    </p>
                    <Timer />
                </Modal>
                <button type="button" onClick={this.showModal}>
                    Start Calibration
                </button>
            </div>
        );
    }
}

export default CalibrationButton