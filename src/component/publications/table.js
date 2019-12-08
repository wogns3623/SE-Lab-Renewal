import React, { Component } from "react";
import "style/Publications.scss";

class Table extends Component {
  render() {
    return (
      <div className="list">
        <li>
          <a href={this.props.address}>{this.props.title}</a>
        </li>
      </div>
    );
  }
}

export default Table;
