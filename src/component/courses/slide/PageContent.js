import React, { Component } from "react";

class PageContent extends Component {
  static defaultProps = {
    className: ""
  };
  render() {
    return (
      <div className={`page_content ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;
