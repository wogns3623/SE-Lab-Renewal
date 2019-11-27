import React, { Component } from "react";

import CourseContents3 from "component/courses/CourseContents3.js";

class CourseBox3 extends Component {
  render() {
    return (
      <div class="wrap-subcontent">
        <h3>{this.props.title}</h3>

        {this.props.courseHome.map(course => {
          return <CourseContents3 {...course}></CourseContents3>;
        })}
      </div>
    );
  }
}

export default CourseBox3;
