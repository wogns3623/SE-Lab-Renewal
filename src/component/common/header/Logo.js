import React, { Component } from "react";
import { Link } from "react-router-dom";

import "style/Logo.scss";
import logoImg from "assets/images/selab_logo_S.png";

class Header extends Component {
  render() {
    return (
      <div className="Logo pull-left">
        <Link exact={true} to="/">
          <img src={logoImg} alt="SE Lab logo"></img>
        </Link>
      </div>
    );
  }
}

export default Header;
