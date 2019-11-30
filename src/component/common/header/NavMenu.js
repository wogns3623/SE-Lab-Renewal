import React, { Component } from "react";

import MenuTemplate from "component/common/template/MenuTemplate.js";
import NavBtn from "./NavBtn.js";

class NavMenu extends Component {
  render() {
    return (
      <MenuTemplate
        className={"NavMenu " + this.props.className}
        items={this.props.items}
        itemComponent={NavBtn}
      ></MenuTemplate>
    );
  }
}

export default NavMenu;
