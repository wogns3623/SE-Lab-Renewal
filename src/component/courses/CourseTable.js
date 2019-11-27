import React, { Component } from "react";
import "style/Gallery.css";

class CourseTable extends Component {
  render() {
    return (
      <div className={"Item " + this.props.className}>
        <a href={this.props.address}>
          <br></br>
          {this.props.title}
        </a>
      </div>
    );
  }
}

export default CourseTable;
