import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import PageTemplate from "component/common/template/PageTemplate.js";
import CourseHome from "component/courses";
import { CSE326 } from "component/courses/pages";

import "style/cse326.css";

function Courses({ match }) {
  return (
    <PageTemplate className="Courses">
      <Route exact path={match.path} component={CourseHome} />
      <Route path={`${match.path}/:courseID`} component={CSE326} />
    </PageTemplate>
  );
}

export default Courses;
