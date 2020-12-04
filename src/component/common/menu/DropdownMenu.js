import React, { Component } from "react";

import "style/Header/dropdownMenu.scss";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

class DropdownMenu extends Component {
  render() {
    return (
      <div
        className={
          "react-Dropdown" +
          (this.props.className !== undefined ? " " + this.props.className : "")
        }
      >
        <NavLink
          to={this.props.to}
          activeStyle={{
            backgroundColor: "#212f3d",
          }}
        >
          <div className="btn">{this.props.title}</div>
        </NavLink>
        <Menu className="content">{this.props.children}</Menu>
      </div>
    );
  }
}

export default DropdownMenu;
