import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.scss";
import Grid from "../Grid/Grid";
import SideMenu from "../Sidemenu/SideMenu";
import Navbar from "../NavBar/Navbar";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div class="d-flex" id="wrapper">
        <SideMenu />

        <div class="alignment" id="page-content-wrapper">
          <Navbar />
          <div class="container-fluid gridsetting ">
            <Grid />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
