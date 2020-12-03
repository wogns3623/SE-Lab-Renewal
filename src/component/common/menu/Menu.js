import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style/menu.scss";
class MenuItem extends Component {
  render() {
    return (
      <div className="react-MenuItem">
        <Link to={this.props.to}>
          <div className="item">{this.props.children}</div>
        </Link>
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
