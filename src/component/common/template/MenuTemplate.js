import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import DropdownMenu from "component/common/menu/DropdownMemu";
import Menu, { MenuItem } from "component/common/menu/Menu";

import "style/Menu.css";

class MenuTemplate extends Component {
  static defaultProps = {
    className: "",
    items: [],
    itemOnClickFunc: () => {}
  };
  render() {
    return (
      <Menu>
        <div className={"Menu " + this.props.className}>
          {this.props.items.map((itemInfo, index) => {
            return (
              <div
                className={
                  "Item " +
                  (itemInfo.className !== undefined
                    ? itemInfo.className
                    : itemInfo.name)
                }
                key={index}
                onClick={() => this.props.itemOnClickFunc(index)}
              >
                <this.props.itemComponent
                  {...itemInfo}
                ></this.props.itemComponent>
              </div>
            );
          })}
        </div>
      </Menu>
    );
  }
}

export default MenuTemplate;
