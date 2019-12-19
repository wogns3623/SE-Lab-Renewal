import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import DropdownMenu from "component/common/menu/DropdownMemu";
import Menu, { MenuItem } from "component/common/menu/Menu";

import NavMenu from "component/common/header/NavMenu.js";
import Logo from "component/common/header/Logo.js";
import "style/Header.css";

class Header extends Component {
  state = {
    menu: [
      {
        name: "notice"
      },
      {
        name: "members"
      },
      {
        name: "research"
      },
      {
        name: "publications"
      },
      {
        name: "courses"
      },
      {
        name: "gallery"
      },
      {
        name: "login"
      }
    ]
  };
  render() {
    return (
      <header role="banner">
        <nav role="navigation">
          <Menu className="pull-left">
            <MenuItem>Notice</MenuItem>
            <MenuItem>Members</MenuItem>
            <MenuItem>Research</MenuItem>
            <DropdownMenu title="Publication">
              <MenuItem>All</MenuItem>
              <MenuItem>International Conference</MenuItem>
              <MenuItem>International Journal</MenuItem>
              <MenuItem>Domestic Conference</MenuItem>
              <MenuItem>Domestic Journal</MenuItem>
            </DropdownMenu>
            <DropdownMenu title="Course">
              <DropdownMenu title="Web App">
                <MenuItem>Home</MenuItem>
                <MenuItem>Slides</MenuItem>
              </DropdownMenu>
              <DropdownMenu title="asd">
                <MenuItem>ss</MenuItem>
                <MenuItem>dd</MenuItem>
              </DropdownMenu>
            </DropdownMenu>
          </Menu>
        </nav>
      </header>
    );
  }
}

export default Header;
