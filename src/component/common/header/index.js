import React, { Component } from "react";
import DropdownMenu from "component/common/menu/DropdownMenu";
import Menu, { MenuItem } from "component/common/menu/Menu";
import { Link } from "react-router-dom";

import NavMenu from "./NavMenu.js";
import Logo from "./Logo.js";
import "style/Header.scss";

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
                pathname: `/notice`
              }}
            >
              <MenuItem>NOTICE</MenuItem>
            </Link>
            <Link
              to={{
                pathname: "/members"
              }}
            >
              <MenuItem>MEMBERS</MenuItem>
            </Link>
            <DropdownMenu title="RESEARCH">
              <Link
                to={{
                  pathname: `/research`,
                  state: {
                    tabIndex: 0
                  }
                }}
              >
                <MenuItem>Introduction</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `/research`,
                  state: {
                    tabIndex: 1
                  }
                }}
              >
                <MenuItem>Project</MenuItem>
              </Link>
            </DropdownMenu>
            <DropdownMenu title="PUBLICATIONS">
              <Link
                to={{
                  pathname: `/publications`,
                  state: {
                    tabIndex: 0
                  }
                }}
              >
                <MenuItem>All</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `/publications`,
                  state: {
                    tabIndex: 1
                  }
                }}
              >
                <MenuItem>International Conference</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `/publications`,
                  state: {
                    tabIndex: 2
                  }
                }}
              >
                <MenuItem>International Journal</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `/publications`,
                  state: {
                    tabIndex: 3
                  }
                }}
              >
                <MenuItem>Domestic Conference</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `/publications`,
                  state: {
                    tabIndex: 4
                  }
                }}
              >
                <MenuItem>Domestic Journal</MenuItem>
              </Link>
            </DropdownMenu>
            <DropdownMenu title="GALLERY">
              <Link
                to={{
                  pathname: `/gallery`,
                  state: {
                    tabIndex: 0
                  }
                }}
              >
                <MenuItem>All</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `/gallery`,
                  state: {
                    tabIndex: 1
                  }
                }}
              >
                <MenuItem>Social</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `/gallery`,
                  state: {
                    tabIndex: 2
                  }
                }}
              >
                <MenuItem>Conference</MenuItem>
              </Link>
              <Link
                to={{
                  pathname: `/gallery`,
                  state: {
                    tabIndex: 3
                  }
                }}
              >
                <MenuItem>ETC.</MenuItem>
              </Link>
            </DropdownMenu>
            <DropdownMenu title="COURSES">
              <DropdownMenu
                className="rightdrop"
                title="Web App"
                pathname={`/courses/cse326`}
              >
                <Link
                  to={{
                    pathname: `/courses/cse326`,
                    state: {
                      tabIndex: 0
                    }
                  }}
                >
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link
                  to={{
                    pathname: `/courses/cse326`,
                    state: {
                      tabIndex: 1
                    }
                  }}
                >
                  <MenuItem>Slides</MenuItem>
                </Link>
              </DropdownMenu>
            </DropdownMenu>
          </Menu>
        </nav>
      </header>
    );
  }
}

export default Header;
