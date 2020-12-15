import React, { Component } from "react";
import { Link } from "react-router-dom";

import "style/Header/Logo.scss";

class Header extends Component {
  render() {
    return (
      <div className="Logo pull-left">
        <Link exact="true" to="/">
          <img
            src="assets/images/common/selab_logo_S.png"
            alt="SE Lab logo"
          ></img>
        </Link>
      </div>
    );
  }
}

export default Header;
