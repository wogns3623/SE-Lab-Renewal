import React, { Component } from "react";

class SlideSection extends Component {
  static defaultProps = {
    className: ""
  };

  render() {
    return (
      <div className={`slide_section ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default SlideSection;
