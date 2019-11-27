import React, { Component } from "react";

import PageTemplate from "component/template/PageTemplate.js";
import CourseBox from "component/courses/CourseBox.js";

import "style/cse326.css";

class Test extends Component {
  render() {
    return (
      <PageTemplate className="Courses">
        <h1>Web Application Development</h1>

        <CourseBox title="Course Objectives">
          <p>
            In this course, the followings will be covered to adequately enable
            web programming and web application development:
          </p>
          <ol>
            <li>
              Understand the protocols, language and systems used on the Web
              (HTML, CSS, HTTP, URLs, XML)
            </li>
            <li>
              Understand the functions of clients and servers on the Web &amp;
              learn how to implement client-side scripts (JavaScript) and
              server-side scripts (PHP)
            </li>
            <li>
              Obtain ability to design and implement an interactive web site
              where usability, accessibility and internationalization issues are
              considered
            </li>
            <li>
              Learn how to use/manage database associated with web applications
              (mainly storage and retrieval)
            </li>
          </ol>
        </CourseBox>

        <CourseBox title="Lecturer: Scott Lee">
          <ul>
            <li>Office: 학연산클러스터 617호</li>
            <li>Tel: 031-400-5238</li>
            <li>Email: scottlee@hanyang.ac.kr</li>
          </ul>
        </CourseBox>

        <CourseBox title="Teaching Assistants">
          <ul>
            <li>
              {" "}
              Gichan Lee
              <ul>
                <li>Office: 학연산클러스터 621호</li>
                <li>Tel: 031-400-4754</li>
                <li>Email: mailto:fantasyopy@gmail.com</li>
              </ul>
            </li>
            <li>
              {" "}
              HakJin Lee
              <ul>
                <li>Office: 학연산클러스터 621호</li>
                <li>Tel: 031-400-4754</li>
                <li>Email: mailto:gsdjini91@gmail.com</li>
              </ul>
            </li>
          </ul>
        </CourseBox>

        <CourseBox title="Places & Dates">
          <p>Class 1 (23497)</p>
          <ul>
            <li>
              Lecture : Thu (09:00 - 10:30) &amp; Fri (13:00 - 14:30) @
              Engineering Building #1 Room 402
            </li>
            <li>
              Lab : Fri (09:00 - 11:00) @ Engineering Building #4 PC Room 1 & 2
            </li>
          </ul>
          <p>Class 2 (24465)</p>
          <ul>
            <li>
              Lecture : Thu (10:30 - 12:00) &amp; Fri (14:30 - 16:00) @
              Engineering Building #1 Room 407
            </li>
            <li>
              lab : Fri (16:00 - 18:00) @ Engineering Building #4 PC Room 1 & 2{" "}
            </li>
          </ul>
        </CourseBox>

        <CourseBox title="Course Forum">
          <ul>
            <li>
              <a href="https://learn.hanyang.ac.kr">Blackboard</a>
            </li>
          </ul>
        </CourseBox>

        <CourseBox title="Textbooks">
          <ul>
            <li>
              Marty Stepp, Jessica Miller, Victoria Kirst,{" "}
              <strong>Web Programming Step by Step: Second Edition</strong>,
              Step by Step Publishing, 2012{" "}
            </li>
          </ul>
        </CourseBox>

        <CourseBox title="Course Schedule">
          <ul>
            <li>
              Week 01 : 05/09/2019 - Introduction & The Internet and World Wide
              Web
            </li>
            <li>Week 01 : 06/09/2019 - Basic HTML</li>
            <li>Week 02 : 12/09/2019 - No Lecture (추석 Thanksgiving)</li>
            <li>Week 02 : 13/09/2019 - No Lecture (추석 Thanksgiving)</li>
            <li>Week 03 : 19/09/2019 - Basic HTML</li>
            <li>Week 03 : 20/09/2019 - CSS for Styling </li>
            <li>Week 04 : 26/09/2019 - CSS for Styling</li>
            <li>Week 04 : 27/09/2019 - Page Layout </li>
            <li>
              Week 05 : 02/10/2019 - [특강] 게임 서버 개발 - 17:00 ~ 19:00
              @제1학술관 101호 (supplementary lecture for 03/10/2019){" "}
            </li>
            <li>
              Week 05 : 03/10/2019 - No Lecture (National Foundation Day) -
              supplementary lecture 02/10/2019
            </li>
            <li>Week 05 : 04/10/2019 - Page Layout </li>
            <li>Week 06 : 10/10/2019 - Basic PHP</li>
            <li>Week 06 : 11/10/2019 - Basic PHP</li>
            <li>Week 07 : 17/10/2019 - Basic PHP </li>
            <li>Week 07 : 18/10/2019 - Forms</li>
            <li>Week 08 : 24/10/2019 - Mid-Term Exam Preparation</li>
            <li>
              Week 08 : 25/10/2019 - Mid-Term Exam 13:00 ~ 16:00 @제1학술관
              101호 (Educational Building I Room 101) & 4공학관 PC1실
              (Engineering Building IV PC Room 1)
            </li>
            <li>Week 09 : 31/10/2019 - Forms</li>
            <li>Week 09 : 01/11/2019 - Forms</li>
            <li>Week 10 : 07/11/2019 - Relational Database &amp; SQL</li>
            <li>Week 10 : 08/11/2019 - Relational Database &amp; SQL</li>
            <li>Week 11 : 14/11/2019 - Relational Database &amp; SQL</li>
            <li>Week 11 : 15/11/2019 - JavaScript</li>
            <li>Week 12 : 21/11/2019 - JavaScript</li>
            <li>Week 12 : 22/11/2019 - DOM</li>
            <li>Week 13 : 28/11/2019 - DOM</li>
            <li>Week 13 : 29/11/2019 - Prototype &amp; Event</li>
            <li>Week 14 : 05/12/2019 - Ajax &amp; XML &amp; JSON</li>
            <li>Week 14 : 06/12/2019 - Ajax &amp; XML &amp; JSON </li>
            <li>Week 15 : 12/12/2019 - Web Services</li>
            <li>Week 15 : 13/12/2019 - Scriptaculous</li>
            <li>Week 16 : 19/12/2019 - Final Exam</li>
            <li>Week 16 : 20/12/2019 - Team Project Presentation</li>
          </ul>
        </CourseBox>
      </PageTemplate>
    );
  }
}

export default Test;
