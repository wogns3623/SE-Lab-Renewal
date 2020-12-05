import React, { Component } from "react";

import Menu, { MenuItem } from "./Menu";

class DropdownMenu extends Component {
  static defaultProps = {
    className: "",
  };

  state = {
    mouseOver: false,
  };

  onMouseOver = () => {
    this.setState({ mouseOver: true });
  };

  onMouseOut = () => {
    this.setState({ mouseOver: false });
  };

  render() {
    return (
      <div
        className={`react-Dropdown mouseOver-${this.state.mouseOver} ${this.props.className}`}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <MenuItem
          className="react-Dropdown-item"
          to={this.props.to}
          activeStyle={{
            backgroundColor: "#212f3d",
          }}
        >
          {this.props.title}
        </MenuItem>
        <Menu className="content">{this.props.children}</Menu>
      </div>
    );
  }
}

export default DropdownMenu;
