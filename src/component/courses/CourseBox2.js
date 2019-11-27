import React, { Component } from "react";

import CourseContents2 from "component/courses/CourseContents2.js";

class CourseBox2 extends Component {
  render() {
    return (
      <div class="wrap-subcontent">
        <h3>{this.props.title}</h3>

        {this.props.courseHome.map(course => {
          return <CourseContents2 {...course}></CourseContents2>;
        })}
      </div>
    );
  }
}

export default CourseBox2;
