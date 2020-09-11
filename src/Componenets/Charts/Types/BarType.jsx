import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: new Array(),
  datasets: [
    {
      label: "one",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(224, 130, 131, 1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(207, 0, 15, 1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(207, 0, 15, 1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: new Array()
    },
    {
      label: "two",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(137, 196, 244, 1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(77, 19, 209, 1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(77, 19, 209, 1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: new Array()
    },
    {
      label: "three",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(123, 239, 178, 1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(30, 130, 76, 1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(30, 130, 76, 1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: new Array()
    },
    {
      label: "four",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: new Array()
    }
    
  ]
};
const options = {
  maintainAspectRatio: false,	// Don't maintain w/h ratio
 responsive :true
};

class BarType extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    data.datasets[0].label = this.props.column_names[1];
    data.datasets[1].label = this.props.column_names[2];
    data.datasets[2].label = this.props.column_names[3];
    data.datasets[3].label = this.props.column_names[4];

    this.props.chartdata.forEach(element => {
      if (element[0].includes("2020-09")) {
        data.labels.push(element[0]);
        data.datasets[0].data.push(element[1]);
        data.datasets[1].data.push(element[2]);
        data.datasets[2].data.push(element[3]);
        data.datasets[3].data.push(element[4]);
      }
    });
  }
  state = {};
  render() {
    return (
      <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={data}
       
        options={options}
      />
    </div>
    );
  }
}

export default BarType;
