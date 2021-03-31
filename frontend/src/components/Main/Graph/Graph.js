import React from "react";
import "./Graph.css";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"],
  datasets: [
    {
      label: "Upper Back",
      data: [3.3, 5.3, 8.5, 4.1, 4.4, 6.5],
      fill: false,
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Lower Back",
      data: [3.3, 2.5, 3.5, 5.1, 5.4, 7.6],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const data2 = {
  labels: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"],
  datasets: [
    {
      label: "Upper Back",
      data: [1.3, 4.3, 4.5, 2.1, 1.4, 5.5],
      fill: false,
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Lower Back",
      data: [4.3, 2.5, 1.5, 4.1, 2.4, 3.6],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default class Graph extends React.Component {
    render() {
        return (
            <div className="graph-wrapper">
                <div>
                    <Line
                        data={data}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            title:{
                                display:true,
                                text:'Average deviation in deg the forward/backward direction',
                                fontSize:12
                            },
                            legend:{
                                display:true,
                                position:'bottom'
                            }}}
                    />
                </div>
                <br/>
                <div>
                    <Line
                        data={data2}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            title:{
                                display:true,
                                text:'Average deviation in deg the left/right direction',
                                fontSize:12
                            },
                            legend:{
                                display:true,
                                position:'bottom'
                            }}}
                    />
                </div>
            </div>
        );
    }
}

// export default class Graph extends React.Component {
//   render() {
//     return (
//       <div className="Graph">
//         <Pie
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//
//         <Doughnut
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }