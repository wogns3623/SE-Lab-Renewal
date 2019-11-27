import React, { Component } from "react";

import CourseContents4 from "component/courses/CourseContents4.js";

class CourseBox4 extends Component {
  render() {
    return (
      <div class="wrap-subcontent_4">
        <h3>{this.props.title}</h3>

        {this.props.courseHome.map(course => {
          return <CourseContents4 {...course}></CourseContents4>;
        })}
      </div>
    );
  }
}

export default CourseBox4;
