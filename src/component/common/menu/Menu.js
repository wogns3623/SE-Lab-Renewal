import React, { Component } from "react";

import "./style/menu.css";
class MenuItem extends Component {
  render() {
    return <div className="item">{this.props.children}</div>;
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
        {children.map((item, index) => (
          <div className="react-MenuItem" key={index}>
            {item}
          </div>
        ))}
      </div>
    );
  }
}

export { Menu as default, MenuItem };
