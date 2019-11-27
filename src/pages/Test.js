import React, { Component } from "react";

import PageTemplate from "component/template/PageTemplate.js";

import CourseBox from "component/courses/CourseBox.js";
import CourseBox2 from "component/courses/CourseBox2.js";
import CourseBox3 from "component/courses/CourseBox3.js";
import CourseBox4 from "component/courses/CourseBox4.js";

import "style/cse326.css";

class Test extends Component {
  state = {
    courseHome: [
      {
        explain:
          "In this course, the followings will be covered to adequately enable web programming and web application development:",
        list: [
          "1. Understand the protocols, language and systems used on the Web (HTML, CSS, HTTP, URLs, XML)",
          "2. Understand the functions of clients and servers on the Web & learn how to implement client-side scripts (JavaScript) and server-side scripts (PHP)",
          "3. Obtain ability to design and implement an interactive web site where usability, accessibility and internationalization issues are considered",
          "4. Learn how to use/manage database associated with web applications (mainly storage and retrieval)"
        ]
      },
      {
        item: [
          "Office: 학연산클러스터 617호",
          "Tel: 031-400-5238",
          "Email: scottlee@hanyang.ac.kr"
        ]
      },
      {
        name: "Gichan Lee",
        item: [
          "Office: 학연산클러스터 621호",
          "Tel: 031-400-4754",
          "Email: mailto:fantasyopy@gmail.com"
        ]
      },
      {
        name: "HakJin Lee",
        item: [
          "Office: 학연산클러스터 621호",
          "Tel: 031-400-4754",
          "Email: mailto:gsdjini91@gmail.com"
        ]
      },
      {
        name: "Class 1 (23497)",
        item: [
          "Lecture : Thu (09:00 - 10:30) & Fri (13:00 - 14:30) @ Engineering Building #1 Room 402]",
          "Lab : Fri (09:00 - 11:00) @ Engineering Building #4 PC Room 1 & 2"
        ]
      },
      {
        name: "Class 2 (24465)",
        item: [
          "Lecture : Thu (10:30 - 12:00) & Fri (14:30 - 16:00) @ Engineering Building #1 Room 407",
          "lab : Fri (16:00 - 18:00) @ Engineering Building #4 PC Room 1 & 2"
        ]
      },
      {
        item: ["black board"]
      },
      {
        item: [
          "Marty Stepp, Jessica Miller, Victoria Kirst, Web Programming Step by Step: Second Edition, Step by Step Publishing, 2012 "
        ]
      },
      {
        item: [
          "Week 01 : 05/09/2019 - Introduction & The Internet and World Wide Web",
          "Week 01 : 06/09/2019 - Basic HTML",
          "Week 02 : 12/09/2019 - No Lecture (추석 Thanksgiving)",
          "Week 02 : 13/09/2019 - No Lecture (추석 Thanksgiving)",
          "Week 03 : 19/09/2019 - Basic HTML",
          "Week 03 : 20/09/2019 - CSS for Styling",
          "Week 04 : 26/09/2019 - CSS for Styling",
          "Week 04 : 27/09/2019 - Page Layout",
          "Week 05 : 02/10/2019 - [특강] 게임 서버 개발 - 17:00 ~ 19:00 @제1학술관 101호 (supplementary lecture for 03/10/2019)",
          "Week 05 : 03/10/2019 - No Lecture (National Foundation Day) - supplementary lecture 02/10/2019",
          "Week 05 : 04/10/2019 - Page Layout ",
          "Week 06 : 10/10/2019 - Basic PHP",
          "Week 06 : 11/10/2019 - Basic PHP",
          "Week 07 : 17/10/2019 - Basic PHP ",
          "Week 07 : 18/10/2019 - Forms",
          "Week 08 : 24/10/2019 - Mid-Term Exam Preparation",
          "Week 08 : 25/10/2019 - Mid-Term Exam 13:00 ~ 16:00 @제1학술관 101호 (Educational Building I Room 101) & 4공학관 PC1실 (Engineering Building IV PC Room 1)",
          "Week 09 : 31/10/2019 - Forms",
          "Week 09 : 01/11/2019 - Forms",
          "Week 10 : 07/11/2019 - Relational Database & SQL",
          "Week 10 : 08/11/2019 - Relational Database & SQL",
          "Week 11 : 14/11/2019 - Relational Database & SQL",
          "Week 11 : 15/11/2019 - JavaScript",
          "Week 12 : 21/11/2019 - JavaScript",
          "Week 12 : 22/11/2019 - DOM",
          "Week 13 : 28/11/2019 - DOM",
          "Week 13 : 29/11/2019 - Prototype & Event",
          "Week 14 : 05/12/2019 - Ajax & XML & JSON",
          "Week 14 : 06/12/2019 - Ajax & XML & JSON ",
          "Week 15 : 12/12/2019 - Web Services",
          "Week 15 : 13/12/2019 - Scriptaculous",
          "Week 16 : 19/12/2019 - Final Exam",
          "Week 16 : 20/12/2019 - Team Project Presentation"
        ]
      }
    ]
  };

  render() {
    return (
      <PageTemplate className="Courses">
        <h1>Web Application Development</h1>
        <CourseBox
          title="Course Objectives"
          courseHome={this.state.courseHome.slice(0, 1)}
        ></CourseBox>
        <CourseBox2
          title="Lecturer: Scott Lee"
          courseHome={this.state.courseHome.slice(1, 2)}
        ></CourseBox2>
        <CourseBox3
          title="Teaching Assistants"
          courseHome={this.state.courseHome.slice(2, 4)}
        ></CourseBox3>
        <CourseBox4
          title="Places & Dates"
          courseHome={this.state.courseHome.slice(4, 6)}
        ></CourseBox4>
        <CourseBox2
          title="Course Forum"
          courseHome={this.state.courseHome.slice(6, 7)}
        ></CourseBox2>
        <CourseBox2
          title="Textbooks"
          courseHome={this.state.courseHome.slice(7, 8)}
        ></CourseBox2>
        <CourseBox2
          title="Course Schedule"
          courseHome={this.state.courseHome.slice(8, 9)}
        ></CourseBox2>
      </PageTemplate>
    );
  }
}

export default Test;
