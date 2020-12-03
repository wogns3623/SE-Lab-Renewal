import React, { Component } from "react";
import Input from "./Input";
import Output from "./Output";

import "./style/LiveCoding.scss";

class LiveCoding extends Component {
  static defaultProps = {
    defaultValue: {
      html: "",
      css: "",
      js: "",
      title: "untitled",
    },
  };
  state = {
    result: "",
  };

  render() {
    return (
      <div className="LiveCoding">
        <Input compile={this.compile} defaultValue={this.props.defaultValue} />
        <Output result={this.state.result} title={this.props.title} />
      </div>
    );
  }
}

export default LiveCoding;
