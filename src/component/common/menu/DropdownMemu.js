import React, { Component } from "react";

import "./style/dropdownMenu.css";
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
        <Link
          to={{
            pathname:
              this.props.pathname === undefined
                ? "/" + this.props.title.toLowerCase()
                : this.props.pathname
          }}
        >
          <span className="btn">
            <span>{this.props.title}</span>
          </span>
        </Link>
        <Menu className="content">{this.props.children}</Menu>
      </div>
    );
  }
}

export default DropdownMenu;
