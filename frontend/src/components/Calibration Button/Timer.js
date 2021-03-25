import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import './Timer.css';

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Calibration complete.</div>;
    }

    return (
        <div className="timer">
            <div className="value">{remainingTime}</div>
        </div>
    );
};

export default function Timer() {
    function restartTimer() {
        setKey(prevKey => prevKey + 1);
    }

    const [key, setKey] = useState(0);
    return (
        <div className="App">
            <div className="timer-wrapper">
                <CountdownCircleTimer
                    key={key}
                    isPlaying
                    duration={10}
                    colors={[["#004777", 1]]}
                    onComplete={() => {
                        setKey((prevKey) => prevKey + 1);}}>
                    {renderTime}
                </CountdownCircleTimer>
            </div>
            <br/>
            <div className="button-wrapper">
                <button onClick={restartTimer}>
                    Restart Timer
                </button>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Timer />, rootElement);
