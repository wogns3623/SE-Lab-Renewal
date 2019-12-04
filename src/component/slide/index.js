import React, { Component } from "react";

import Header from "component/common/header";
import "style/Slide.css";

class Slide extends Component {
  state = {
    siderBarActive: true
  };

  handleActive = value => {
    this.setState({
      siderBarActive: value
    });
  };

  render() {
    return (
      <>
        <Header></Header>

        <nav
          className={`sider_bar${this.state.siderBarActive ? "" : " deactive"}`}
        ></nav>
        <button
          className={this.state.siderBarActive ? "" : "deactive"}
          onClick={() => {
            this.handleActive(!this.state.siderBarActive);
          }}
        >
          {this.state.siderBarActive ? "<" : ">"}
        </button>

        <main className="Slide"></main>
      </>
    );
  }
}

export default Slide;
