import React from "react";

import courseInfo from "./courseInfo.json";
import CourseTable from "./CourseTable";

function CourseHome({ match }) {
  return (
    <>
      {courseInfo.data.map((item, index) => (
        <CourseTable
          {...{ ...courseInfo, data: item }}
          match={match}
          key={index}
        ></CourseTable>
      ))}
    </>
  );
}

export default CourseHome;
