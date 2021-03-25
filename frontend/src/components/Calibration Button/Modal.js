import './Modal.css';
import Timer from "./Timer";
import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h3>Sit up straight, it's time to calibrate!</h3>
        <p>
            The device will calibrate for 10 seconds.<br/>
            Visit the resources page for a visualization of how to sit with proper posture.
        </p>
        <Timer/>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;