import React, { Component, Fragment } from "react";

import courseInfo from "./courseInfo.json";
import CourseTable from "./CouseTable";

class CourseHome extends Component {
  render() {
    return (
      <Fragment>
        <h1>COURSES</h1>
        {courseInfo.data.map((item, index) => (
          <CourseTable
            {...{ ...courseInfo, data: item }}
            key={index}
          ></CourseTable>
        ))}
      </Fragment>
    );
  }
}

export default CourseHome;
