import React, { Component } from "react";

class CourseBox extends Component {
  render() {
    return (
      <div className="wrap-subcontent">
        <h3>{this.props.title}</h3>

        {this.props.children}
      </div>
    );
  }
}

export default CourseBox;
