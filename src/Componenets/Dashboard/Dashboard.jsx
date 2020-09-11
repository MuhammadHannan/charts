import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.scss";
import GridView from "../Grid/GridView";
import SideMenu from "../Sidemenu/SideMenu";
import Navbar from "../NavBar/Navbar";

class Dashboard extends Component {
 constructor(){
   super ();
   this.state = {    type : ""};
 }
  onchangetype= (type) => {
    this.setState({
      type : type
    })
  }
  render() {
   
    return (
      <div class="d-flex" id="wrapper">
        <SideMenu type= {this.onchangetype.bind(this)}/>

        <div class="alignment" id="page-content-wrapper">
          <Navbar />
          <div class="container-fluid gridsetting "> <GridView selectedtype={this.state.type}/> </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
