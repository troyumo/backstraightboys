import React, { useState, useEffect } from "react";
import './Welcome.css'

export const Welcome = () => {
    let [date, setDate] = useState(new Date());
    const username = 'Troy';

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <div>
            <p>
                Hi {username}, it is {date.toLocaleTimeString()} on {date.toLocaleDateString()}.
                Let's take a look at your posture today:
            </p>
        </div>
    )
}

export default Welcome
