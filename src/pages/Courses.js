import React, { Component } from 'react';

import PageTemplate from 'component/template/PageTemplate.js';
import 'style/Courses.css';

class Courses extends Component {
  render() {
    return (
      <PageTemplate className='Courses'><h1>COURSES</h1>
      <div id="course_table">
        <table id="first_table">
          <tr>
            <th class="coursenum" colspan="2">Undergraduate Courses</th>
          </tr>
          <tr>
            <td class="coursenum" data-href="cse107">CSE107</td>
            <td class="course" data-href="cse107">Logical Fundamentals of Programming</td>
          </tr>
          <tr>
            <td class="coursenum">CSE117</td>
            <td class="course">Programming Fundamentals</td>
          </tr>
          <tr>
            <td class="coursenum">CSE322</td>
            <td class="course">Web Programming</td>
          </tr>
          <tr>
            <td class="coursenum active" data-href="cse326">CSE326</td>
            <td class="course active" data-href="cse326">Web Application Development</td>
          </tr>
          <tr>
            <td class="coursenum" data-href="cse406">CSE406</td>
            <td class="course" data-href="cse406">Software Engineering</td>
          </tr>
        </table>
        <div id="over">
          <table id="second_table">
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
                <div class="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
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
                <div class="circle"></div>
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
                <div class="circle"></div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*  Web App  */}
            <tr>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
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
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <div id="course_table">
        <table id="first_table">
          <tr>
            <th class="coursenum" colspan="2">Postgraduate Courses</th>
          </tr>
          <tr>
            <td class="coursenum" data-href="cin870">CIN870</td>
            <td class="course" data-href="cin870">Formal Methods</td>
          </tr>
          <tr>
            <td class="coursenum" data-href="cse603">CSE603</td>
            <td class="course" data-href="cse603">Management of Semistructured Data</td>
          </tr>
          <tr>
            <td class="coursenum" data-href="cse609">CSE609</td>
            <td class="course" data-href="cse609">Model Checking</td>
          </tr>
          <tr>
            <td class="coursenum" data-href="cse639">CSE639</td>
            <td class="course" data-href="cse639">Special Topics in Software Engineering</td>
          </tr>
          <tr>
            <td class="coursenum active" data-href="cse6050">CSE6050</td>
            <td class="course active" data-href="cse6050">Advanced Software Engineering</td>
          </tr>
        </table>
        <div id="over">
          <table id="second_table">
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
            {/* Formal Methods */}
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
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
            </tr>
            {/* Management of SemiData */}
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
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
            </tr>
            {/*  Model Checking  */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/*  Special Topic SE  */}
            <tr>
              <td></td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
              <td></td>
              <td></td>
              <td>
                <div class="circle"></div>
              </td>
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
            </tr>
            {/*  Advanced SE  */}
            <tr>
              <td>
                <div class="circle"></div>
              </td>
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
            </tr>
          </table>
        </div>
      </div>
      </PageTemplate>
    );
  }
}

export default Courses;