import React, { useState } from "react";
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
    const [key, setKey] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    function startTimer() {
        if (!isPlaying) {
            setIsPlaying(isPlaying => !isPlaying);
            setKey(prevKey => prevKey + 1);
        }
        else {
            alert('Device is currently calibrating. Please wait for it to finish.')
        }
    }

    return (
        <div className="App">
            <div className="timer-wrapper">
                <CountdownCircleTimer
                    key={key}
                    isPlaying={isPlaying}
                    duration={10}
                    colors={[["#004777", 1]]}
                    onComplete={() => {
                        setIsPlaying(isPlaying => !isPlaying);}}>
                    {renderTime}
                </CountdownCircleTimer>
            </div>
            <br/>
            <div className="button-wrapper">
                <button onClick={startTimer}>Start Calibration</button>
            </div>
        </div>
    );
}
