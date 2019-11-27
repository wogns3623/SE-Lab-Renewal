import React, { Component } from "react";

import CourseContents4 from "component/courses/CourseContents3.js";

class CourseBox4 extends Component {
  render() {
    return (
      <div class="wrap-subcontent">
        <h3>{this.props.title}</h3>

        {this.props.courseHome.map(course => {
          return <CourseContents4 {...course}></CourseContents4>;
        })}
      </div>
    );
  }
}

export default CourseBox4;
