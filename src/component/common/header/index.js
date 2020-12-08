import React, { Component } from "react";
import DropdownMenu from "component/common/menu/DropdownMenu";
import Menu, { MenuItem } from "component/common/menu/Menu";
import Logo from "./Logo.js";
import "style/Header/Header.scss";
import "style/Header/Menu.scss";
import "style/Header/DropdownMenu.scss";

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
    let activeStyle = {
      backgroundColor: "#212f3d",
    };
    return (
      <header role="banner">
        <nav role="navigation">
          <Logo></Logo>
          <Menu className="pull-left">
            <MenuItem to="/notice" activeStyle={activeStyle}>
              NOTICE
            </MenuItem>

            <MenuItem to="/members" activeStyle={activeStyle}>
              MEMBERS
            </MenuItem>

            <DropdownMenu title="RESEARCH" to="/research">
              <MenuItem
                to={{
                  pathname: "/research",
                  state: {
                    tabIndex: 0,
                  },
                }}
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                activeStyle={activeStyle}
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
                  activeStyle={activeStyle}
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
                  activeStyle={activeStyle}
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
