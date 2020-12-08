import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuItem extends Component {
  static defaultProps = {
    className: "",
  };

  render() {
    return (
      <NavLink to={this.props.to} activeStyle={this.props.activeStyle}>
        <div className={`react-Menu-item ${this.props.className}`}>
          {this.props.children}
        </div>
      </NavLink>
    );
  }
}

class Menu extends Component {
  static defaultProps = {
    className: "",
  };

  render() {
    return (
      <div className={`react-Menu ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export { Menu as default, MenuItem };
