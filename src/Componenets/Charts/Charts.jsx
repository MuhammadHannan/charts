import React, { Component } from "react";
import RadarType from "./Types/RadarType";
 
import LineType from "./Types/LineType"
import BarType from "./Types/BarType"
// export default Charts;
class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,      
      columns:[],
      datasets: []
    };
  }

  componentDidMount() {
    fetch("https://www.quandl.com/api/v3/datasets/FSE/EON_X.json?api_key=TCZnxxn3DzyPRHJ9Zvkf")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
             columns: result.dataset.column_names,
             datasets: result.dataset.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, columns,datasets } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="main">     
           <RadarType chatdata= {datasets} column_names ={columns}></RadarType> 
        <LineType chartdata= {datasets} column_names= {columns}></LineType> 
        
        <BarType chartdata= {datasets} column_names= {columns}></BarType> 
        </div>
  
      );
    }
  }
}
export default Charts;