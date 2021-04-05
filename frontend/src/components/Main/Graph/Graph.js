import React from "react";
import "./Graph.css";
import axios from "axios";

import { Line } from "react-chartjs-3";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Graph extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            var_FB_data: {},
            var_LR_data: {},
            A_x_upper: {},
            A_x_lower: {},
            A_z_upper: {},
            A_z_lower: {},

            date: new Date().toLocaleDateString('en-CA'),
            time: new Date().toLocaleTimeString('en-GB'),
        };
    }

    componentDidMount() {
        this.retrieveData();

        this.intervalID = setInterval(this.retrieveData.bind(this), 60000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    retrieveData() {
        axios.get(`http://localhost:8000/angles/?user=1&date=${this.state.date}`)
            .then(res => {
                this.updateGraphData(res.data);
            })
            .catch(err => console.log(err));
    }

    updateGraphData = (data) => {
        let i = 0;
        let A_x_upper = [];
        let A_x_lower = [];
        let A_z_upper = [];
        let A_z_lower = [];
        let time = []

        while (i < data.length) {
            A_x_upper = A_x_upper.concat(data[i].A_x_upper)
            A_x_lower = A_x_lower.concat(data[i].A_x_lower)
            A_z_upper = A_z_upper.concat(data[i].A_z_upper)
            A_z_lower = A_z_lower.concat(data[i].A_z_lower)
            time = time.concat(data[i].time)
            i++;
        }

        this.setUpGraph(A_x_upper, A_x_lower, A_z_upper, A_z_lower, time)
    }

    setUpGraph(A_x_upper, A_x_lower, A_z_upper, A_z_lower, time) {
        let var_FB_data = {
            type: 'scatter',
            labels: time,
            datasets: [
                {
                    label: "Upper Back",
                    data: A_x_upper,
                    fill: false,
                    borderColor: "rgba(75,192,192,1)"
                },
                {
                    label: "Lower Back",
                    data: A_x_lower,
                    fill: false,
                    borderColor: "#742774"
                }
                ]
        }

        let var_LR_data ={
            type: 'scatter',
            labels: time,
            datasets: [
                {
                    label: "Upper Back",
                    data: A_z_upper,
                    fill: false,
                    borderColor: "rgba(75,192,192,1)"
                },
                {
                    label: "Lower Back",
                    data: A_z_lower,
                    fill: false,
                    borderColor: "#742774"
                }
                ]
        }

        this.setState({var_FB_data: var_FB_data})
        this.setState({var_LR_data: var_LR_data})
    }

    render() {
        return (
            <div className="graphs">
                <div className="graph-wrapper">
                    {Object.keys(this.state.var_FB_data).length &&
                    <Line
                        data={this.state.var_FB_data}
                        width={"650px"}
                        height={"250px"}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            title:{
                                display:true,
                                text:'Deviation from Calibrated Posture in Forward/Backward Direction',
                                fontSize:12
                            },
                            legend:{
                                display:true,
                                position:'bottom'
                            },
                        }}
                    />}
                </div>
                <div className="graph-wrapper">
                    {Object.keys(this.state.var_LR_data).length &&
                    <Line
                        data={this.state.var_LR_data}
                        width={"650px"}
                        height={"250px"}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            title:{
                                display:true,
                                text:'Deviation from Calibrated Posture in Left/Right Direction',
                                fontSize:12
                            },
                            legend:{
                                display:true,
                                position:'bottom'
                            }}}
                    />}
                </div>
            </div>
        );
    }
}