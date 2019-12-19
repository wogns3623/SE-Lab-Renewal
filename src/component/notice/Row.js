import React, { Component } from "react";

import "style/Row.css";

class Row extends Component {
  static defaultProps = {
    title: "Basic Title",
    name: "Basic Name",
    date: "Basic Date",
    value: "No contents here"
  };

  state = {
    isOn: true
  };

  handleClick = () => {
    const { isOn } = this.state;
    this.setState({
      isOn: !isOn
    });
  };

  render() {
    return (
      <div className="Row">
        <ul onClick={() => this.handleClick()}>
          <li className="title">{this.props.title}</li>
          <li className="name">{this.props.name}</li>
          <li className="date">{this.props.date}</li>
        </ul>
        <div
          className={"row_content " + (this.state.isOn ? "hide" : "appear")}
          onClick={this.handleClick}
        >
          {this.props.value}
        </div>
      </div>
    );
  }
}
export default Row;
