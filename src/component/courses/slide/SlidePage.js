import React, { Component } from "react";

class SlidePage extends Component {
  static defaultProps = {
    className: "",
  };

  render() {
    return (
      <div className={`slide_page ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default SlidePage;
