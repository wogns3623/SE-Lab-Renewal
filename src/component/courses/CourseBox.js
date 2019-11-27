import React, { Component } from "react";

import CourseContents from "component/courses/CourseContents.js";

class CourseBox extends Component {
  render() {
    return (
      <div class="wrap-subcontent">
        <h3>{this.props.title}</h3>

        {this.props.courseHome.map(course => {
          return <CourseContents {...course}></CourseContents>;
        })}
      </div>
    );
  }
}

export default CourseBox;
