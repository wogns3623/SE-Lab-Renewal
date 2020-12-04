import React, { Component } from "react";

import "style/Row.scss";

class Row extends Component {
  static defaultProps = {
    title: "Title",
    name: "Name",
    date: "Date",
    value: "No contents here",
    disable: false,
  };

  state = {
    isOn: true,
  };

  handleClick = () => {
    const { isOn } = this.state;
    this.setState({
      isOn: !isOn,
    });
  };

  render() {
    let summery = (
      <ul
        className="Row_summery"
        onClick={this.props.disable ? null : this.handleClick}
      >
        <li className="title">{this.props.title}</li>
        <li className="name">{this.props.name}</li>
        <li className="date">{this.props.date}</li>
      </ul>
    );

    let content = (
      <div
        className={"Row_content " + (this.state.isOn ? "hide" : "appear")}
        onClick={this.handleClick}
      >
        {this.props.value}
      </div>
    );

    return (
      <div
        className={"Row_container" + (this.props.disable ? " disabled" : "")}
      >
        {summery}
        {this.props.disable ? null : content}
      </div>
    );
  }
}

export default Row;
