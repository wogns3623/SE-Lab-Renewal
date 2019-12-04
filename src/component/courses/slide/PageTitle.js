import React, { Component } from "react";

class PageTitle extends Component {
  static defaultProps = {
    className: ""
  };
  render() {
    return (
      <div className={`page_title ${this.props.className}`}>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default PageTitle;
