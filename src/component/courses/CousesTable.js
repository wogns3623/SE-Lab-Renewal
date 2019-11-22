import React, { Component } from 'react';

class CoursesTable extends Component{
  data
  render() {
    return(
      <div className="CourseTable">
        <table className="first_table">
          <tr>
            <th className="coursenum" colspan="2">Undergraduate Courses</th>
          </tr>
          <tr>
            <td className="coursenum" data-href="cse107">CSE107</td>
            <td className="course" data-href="cse107">Logical Fundamentals of Programming</td>
          </tr>
          <tr>
            <td className="coursenum">CSE117</td>
            <td className="course">Programming Fundamentals</td>
          </tr>
          <tr>
            <td className="coursenum">CSE322</td>
            <td className="course">Web Programming</td>
          </tr>
          <tr>
            <td className="coursenum active" data-href="cse326">CSE326</td>
            <td className="course active" data-href="cse326">Web Application Development</td>
          </tr>
          <tr>
            <td className="coursenum" data-href="cse406">CSE406</td>
            <td className="course" data-href="cse406">Software Engineering</td>
          </tr>
        </table>
        <div className="over">
          <table className="second_table">
            <tr>
              <th>2019-2</th>
              <th>2019-1</th>
              <th>2018-1</th>
              <th>2017-2</th>
              <th>2017-1</th>
              <th>2016-2</th>
              <th>2016-1</th>
              <th>2015-2</th>
              <th>2015-1</th>
              <th>2014-2</th>
              <th>2014-1</th>
              <th>2013-2</th>
              <th>2013-1</th>
              <th>2012-2</th>
              <th>2012-1</th>
              <th>2011-2</th>
            </tr>
            {/* Logical */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
            </tr>
            {/* Programming Fundamentals */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
            </tr>
            {/* Web */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*  Web App  */}
            <tr>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* SE */}
            <tr>
              <td></td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className="circle"></div>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default CoursesTable;