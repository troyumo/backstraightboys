import React from "react";

export default function Interface() {
    return(
        <div className="bluetooth-scripts">
            <button id="connect" type="button">Connect</button>
            <button id="disconnect" type="button">Disconnect</button>
            <div id="terminal">
                <form id="send-form">
                    <input id="input" type="text">
                        <button type="submit">Send</button>
                    </input>
                </form>
            </div>
            <script src="main.js"/>
        </div>
    );
}