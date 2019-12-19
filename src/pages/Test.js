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
          <Logo></Logo>
          <Menu className="pull-left">
            <Link
              to={{
                pathname: `notice`
              }}
            >
              <MenuItem>Notice</MenuItem>
            </Link>
            <Link
              to={{
                pathname: "members"
              }}
            >
              <MenuItem>Members</MenuItem>
            </Link>
            <DropdownMenu title="RESEARCH">
              <Link
                to={{
                  pathname: `research`,
                  state: {
                    tabIndex: 0
                  }
                }}
              >
                <MenuItem>Introduction</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `research`,
                  state: {
                    tabIndex: 1
                  }
                }}
              >
                <MenuItem>Project</MenuItem>
              </Link>
            </DropdownMenu>
            <DropdownMenu title="Publications">
              <Link
                to={{
                  pathname: `publications`,
                  state: {
                    tabIndex: 0
                  }
                }}
              >
                <MenuItem>All</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `publications`,
                  state: {
                    tabIndex: 1
                  }
                }}
              >
                <MenuItem>I C</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `publications`,
                  state: {
                    tabIndex: 2
                  }
                }}
              >
                <MenuItem>I J</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `publications`,
                  state: {
                    tabIndex: 3
                  }
                }}
              >
                <MenuItem>D C</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `publications`,
                  state: {
                    tabIndex: 4
                  }
                }}
              >
                <MenuItem>D J</MenuItem>
              </Link>
            </DropdownMenu>
            <DropdownMenu title="COURSES">
              <DropdownMenu className="leftdrop" title="Web App">
                <Link
                  to={{
                    pathname: `courses/cse326`,
                    state: {
                      tabIndex: 0
                    }
                  }}
                >
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link
                  to={{
                    pathname: `courses/cse326`,
                    state: {
                      tabIndex: 1
                    }
                  }}
                >
                  <MenuItem>Slides</MenuItem>
                </Link>
              </DropdownMenu>
            </DropdownMenu>
            <DropdownMenu title="GALLERY">
              <Link
                to={{
                  pathname: `gallery`,
                  state: {
                    tabIndex: 0
                  }
                }}
              >
                <MenuItem>All</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `gallery`,
                  state: {
                    tabIndex: 1
                  }
                }}
              >
                <MenuItem>Social</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `gallery`,
                  state: {
                    tabIndex: 2
                  }
                }}
              >
                <MenuItem>Conference</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `gallery`,
                  state: {
                    tabIndex: 3
                  }
                }}
              >
                <MenuItem>ETC.</MenuItem>
              </Link>
            </DropdownMenu>
          </Menu>
        </nav>
      </header>
    );
  }
}

export default Header;
