import React, { Component } from 'react';
import { Route } from 'react-dom';

import PageTemplate from "component/template/PageTemplate.js";
import courseInfo from "component/courses/courseInfo.json";
import CourseTable from "../component/courses/CouseTable";

class Courses extends Component {
  render() {
    return (
      // <Route  />>
      <PageTemplate className='Courses'>
        {/* <Route to={this.props.match}></Route> */}
        <h1>COURSES</h1>
        {courseInfo.data.map((item, index) => (
        <CourseTable {...{...courseInfo, data:item}} key={index}></CourseTable>
        ))}
      </PageTemplate>
    );
  }
}

export default Courses;
