import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "style/Header/menu.scss";
class MenuItem extends Component {
  render() {
    return (
      <div className="item">
        <NavLink
          to={this.props.to}
          activeStyle={{
            backgroundColor: "#212f3d",
          }}
        >
          <div className="name">{this.props.children}</div>
        </NavLink>
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    let children = this.props.children;
    if (this.props.children.length === undefined) {
      children = [this.props.children];
    }
    return (
      <div
        className={
          "react-Menu" +
          (this.props.className !== undefined ? " " + this.props.className : "")
        }
      >
        {children.map((item, index) => item)}
      </div>
    );
  }
}

export { Menu as default, MenuItem };
