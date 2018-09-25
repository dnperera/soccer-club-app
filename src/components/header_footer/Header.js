import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { TeamLogo } from "../utils/icons";
class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#98c5e9",
          padding: "10px 0",
          borderBottom: "2px solid #00285e",
          boxShadow: "none"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div
            style={{
              flexGrow: 1
            }}
          >
            <div className="header_logo">
              <TeamLogo link="/team" width="70px" height="70px" />
            </div>
          </div>
          <Link to="/team">
            <Button color="inherit">Team Members</Button>
          </Link>
          <Link to="/matches">
            <Button color="inherit">Match Schedule</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Header;
