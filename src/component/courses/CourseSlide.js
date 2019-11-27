import React, { Component } from "react";

import CourseTab from "component/courses/CourseTab.js";

class CourseSlide extends Component {
  state = {
    tabList: [{ name: "No." }, { name: "Lecture Slides" }, { name: "Labs" }],
    ALL: [
      {
        name: "International Conference",
        list: [
          {
            title: "Zhiqiang Wu",
            address: "https"
          },
          {
            title: "Mohsin ",
            address: "https:"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <PageTamplate className="Publications">
        <div>
          <h1>Web Application Development</h1>
          <CourseTab
            tabList={this.state.tabList}
            contents={this.state.ALL}
          ></CourseTab>
        </div>
      </PageTamplate>
    );
  }
}

export default CourseSlide;
