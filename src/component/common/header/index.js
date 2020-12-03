import React, { Component } from "react";
import DropdownMenu from "component/common/menu/DropdownMenu";
import Menu, { MenuItem } from "component/common/menu/Menu";
import Logo from "./Logo.js";
import "style/Header.scss";

class Header extends Component {
  state = {
    menu: [
      {
        name: "notice",
      },
      {
        name: "members",
      },
      {
        name: "research",
      },
      {
        name: "publications",
      },
      {
        name: "courses",
      },
      {
        name: "gallery",
      },
      {
        name: "login",
      },
    ],
  };
  render() {
    return (
      <header role="banner">
        <nav role="navigation">
          <Logo></Logo>
          <Menu className="pull-left">
            <MenuItem to="/notice">NOTICE</MenuItem>

            <MenuItem to="/members">MEMBERS</MenuItem>

            <DropdownMenu title="RESEARCH" to="/research">
              <MenuItem
                to={{
                  pathname: "/research",
                  state: {
                    tabIndex: 0,
                  },
                }}
              >
                Introduction
              </MenuItem>
              <MenuItem
                to={{
                  pathname: "/research",
                  state: {
                    tabIndex: 1,
                  },
                }}
              >
                Project
              </MenuItem>
            </DropdownMenu>

            <DropdownMenu title="PUBLICATIONS" to="/publications">
              <MenuItem
                to={{
                  pathname: "/publications",
                  state: {
                    tabIndex: 0,
                  },
                }}
              >
                All
              </MenuItem>
              <MenuItem
                to={{
                  pathname: "/publications",
                  state: {
                    tabIndex: 1,
                  },
                }}
              >
                International Conference
              </MenuItem>
              <MenuItem
                to={{
                  pathname: "/publications",
                  state: {
                    tabIndex: 2,
                  },
                }}
              >
                International Journal
              </MenuItem>
              <MenuItem
                to={{
                  pathname: "/publications",
                  state: {
                    tabIndex: 3,
                  },
                }}
              >
                Domestic Conference
              </MenuItem>
              <MenuItem
                to={{
                  pathname: "/publications",
                  state: {
                    tabIndex: 4,
                  },
                }}
              >
                Domestic Journal
              </MenuItem>
            </DropdownMenu>

            <DropdownMenu title="GALLERY" to="/gallery">
              <MenuItem
                to={{
                  pathname: "/gallery",
                  state: {
                    tabIndex: 0,
                  },
                }}
              >
                All
              </MenuItem>
              <MenuItem
                to={{
                  pathname: "/gallery",
                  state: {
                    tabIndex: 1,
                  },
                }}
              >
                Social
              </MenuItem>
              <MenuItem
                to={{
                  pathname: "/gallery",
                  state: {
                    tabIndex: 2,
                  },
                }}
              >
                Conference
              </MenuItem>
              <MenuItem
                to={{
                  pathname: "/gallery",
                  state: {
                    tabIndex: 3,
                  },
                }}
              >
                ETC.
              </MenuItem>
            </DropdownMenu>

            <DropdownMenu title="COURSES" to="/courses">
              <DropdownMenu
                className="rightdrop"
                title="Web App"
                to="/courses/cse326"
              >
                <MenuItem
                  to={{
                    pathname: "/courses/cse326",
                    state: {
                      tabIndex: 0,
                    },
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  to={{
                    pathname: "/courses/cse326",
                    state: {
                      tabIndex: 1,
                    },
                  }}
                >
                  Slides
                </MenuItem>
              </DropdownMenu>
            </DropdownMenu>
          </Menu>
        </nav>
      </header>
    );
  }
}

export default Header;
