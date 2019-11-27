import React, { Component } from "react";
import { Route } from "react-dom";

import PageTemplate from "component/common/template/PageTemplate.js";
import CourseHome from "component/courses";
import { CSE326 } from "component/courses/pages";

class Courses extends Component {
  render() {
    // console.log(this.props)
    return (
      <PageTemplate className="Courses">
        <Route exact path={this.props.match.path} component={CourseHome} />>
        <Route path={this.props.match.path + "/CSE326/2019"}></Route>
      </PageTemplate>
    );
  }
}

export default Courses;
