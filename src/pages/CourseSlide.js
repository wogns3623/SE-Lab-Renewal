import React, { Component } from "react";

import PageTemplate from "component/template/PageTemplate.js";
import Course_slide from "component/courses/CourseSlide.js";
import "style/CouseSlide.css";

class Test extends Component {
  lcontent = [
    {
      Lec: "Introduction"
    },
    {
      Lec: "The Internet & World Wide Web"
    },
    {
      Lec: "Basic HTML"
    },
    {
      Lec: "CSS for Styling"
    }
  ];

  rcontent = [
    {
      Lec: "Introduction - Week 3"
    },
    {
      Lec: "About Me (HTML) - Week 4"
    },
    {
      Lec: "CSS - Week 5"
    },
    {
      Lec: "CSS Design & Layout - Week 6"
    }
  ];

  render() {
    return (
      <PageTemplate>
        <content className="box">
          <table>
            <thead>
              <th>NO.</th>
              <th>Lecture Slides</th>
            </thead>
            <tbody>
              {[
                this.lcontent.map((item, index) => {
                  return (
                    <Course_slide
                      {...item}
                      index={index}
                      key={index}
                    ></Course_slide>
                  );
                })
              ]}
            </tbody>
          </table>
          <table>
            <thead>
              <th>NO.</th>
              <th>Labs</th>
            </thead>
            <tbody>
              {[
                this.rcontent.map((item, index) => {
                  return (
                    <Course_slide
                      {...item}
                      index={index}
                      key={index}
                    ></Course_slide>
                  );
                })
              ]}
            </tbody>
          </table>
        </content>
      </PageTemplate>
    );
  }
}
export default Test;
