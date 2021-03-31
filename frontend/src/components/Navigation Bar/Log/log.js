import React, { Component } from "react";
import axios from "axios";

import './log.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export default class Log extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            angles: []
        };

        this.retrieveData = this.retrieveData.bind(this);
    }

    componentDidMount() {
        this.retrieveData();
    }

    retrieveData() {
        axios.get(`http://localhost:8000/angles/?user=1`)
            .then(res => {
                this.setState({angles: res.data});
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="log-box">
                <p>{this.state.angles}</p>
            </div>
        );
    }
}