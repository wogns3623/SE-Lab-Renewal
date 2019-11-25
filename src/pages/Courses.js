import React, { Component } from 'react';

import PageTemplate from 'component/template/PageTemplate.js';
import 'style/Courses.css';
import courseInfo from 'component/courses/courseInfo.json';
import CourseTable from '../component/courses/CouseTable';

class Courses extends Component {
  render() {
    return (
      <PageTemplate className='Courses'>
        <h1>COURSES</h1>
        {courseInfo.data.map((item, index) => (
        <CourseTable startYear={courseInfo.startYear}
          startSemester={courseInfo.startSemester}
          data={item} key={index}></CourseTable>
        ))}
      </PageTemplate>
    );
  }
}

export default Courses;