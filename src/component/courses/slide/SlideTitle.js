import React, { Component } from "react";

class SlideTitle extends Component {
  static defaultProps = {
    className: ""
  };

  render() {
    return (
      <div className={`slide_title ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default SlideTitle;
