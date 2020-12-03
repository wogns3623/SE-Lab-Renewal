import React, { Component } from "react";

import "./style/dropdownMenu.scss";
import Menu from "./Menu";
import { Link } from "react-router-dom";

class DropdownMenu extends Component {
  render() {
    return (
      <div
        className={
          "react-Dropdown" +
          (this.props.className !== undefined ? " " + this.props.className : "")
        }
      >
        <Link to={this.props.to}>
          <div className="btn">{this.props.title}</div>
        </Link>
        <Menu className="content">{this.props.children}</Menu>
      </div>
    );
  }
}

export default DropdownMenu;
