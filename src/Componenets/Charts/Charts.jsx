import React, { Component } from "react";
import RadarType from "./Types/RadarType";

import LineType from "./Types/LineType";
import BarType from "./Types/BarType";
// export default Charts;
class Charts extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      columns: [],
      datasets: []
    };
    console.log(props)
  }

   renderSwitch(key,datasets,columns) {
    switch (key.toLowerCase()) {
      case "charts/radarchart":
        return (<div><RadarType chartdata={datasets} column_names={columns}></RadarType><hr></hr></div>);
      
      case "charts/linechart":
        return (<div><LineType chartdata={datasets} column_names={columns}></LineType><hr></hr></div>);
      case "charts/barchart":
        return (<div><BarType chartdata={datasets} column_names={columns}></BarType><hr></hr></div>);
     default:
          return (<div><RadarType chartdata={datasets} column_names={columns}></RadarType><hr></hr></div>);
    }
  }

  componentDidMount() {
    fetch(
      "https://www.quandl.com/api/v3/datasets/FSE/EON_X.json?api_key=TCZnxxn3DzyPRHJ9Zvkf"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            columns: result.dataset.column_names,
            datasets: result.dataset.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, columns, datasets } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <div className="main"> {this.renderSwitch(this.props.chartype,datasets,columns)} </div>
      );
    }
  }


}
export default Charts;
