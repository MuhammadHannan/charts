import React, { Component } from "react";
import "../Sidemenu/SideMeun.scss";
import SideNav, {  Toggle,  Nav,  NavItem,  NavIcon,  NavText} from "@trendmicro/react-sidenav";

 

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class SideMenu extends Component {
  constructor(props){
    super (props);
    this.state={
      charttype : "radar"
    }
  } 

  onchangecharttype(selected){
    this.props.type(selected);
    console.log(selected)
  }
  render() {
    return (
      <SideNav className ="pos" onSelect={ selected => {this.onchangecharttype(selected)}}      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">  
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            
            <NavIcon> <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey="charts/Radarchart">
              <NavText>Radar Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      // <div class="bg-light border-right sidebar " id="sidebar-wrapper">
      //   <div class="sidebar-heading  alingment">
      //     <ul>
      //       <li className="heading">
      //         Radar
      //       </li>
      //     </ul>
      //   </div>
      // </div>
    );
  }
}

export default SideMenu;
