import React, { Component } from "react";

import PageTemplate from "component/common/template/PageTemplate.js";
import Row from "component/notice/Row.js";
import "style/Notice.scss";

class Notice extends Component {
  state = {
    contents: [
      { title: "Title", name: "Name", date: "Date" },
      {
        title: "연구원 모집",
        name: "Scott-Uk-Jin Lee",
        date: "29 Aug 2014",
        value:
          "SELab에서는 소프트웨어공학 전 분야, 멀티쓰레드 소프트웨어 및 웹 기술을 함께 연구할 석사, 박사, 석박통합 및 박사후 과정의 연구원을 모집하고 있습니다.SELab에서는 소프트웨어공학 전 분야, 멀티쓰레드 소프트웨어 및 웹 기술을 함께 연구할 석사, 박사, 석박통합 및 박사후 과정의 연구원을 모집하고 있습니다.SELab에서는 소프트웨어공학 전 분야, 멀티쓰레드 소프트웨어 및 웹 기술을 함께 연구할 석사, 박사, 석박통합 및 박사후 과정의 연구원을 모집하고 있습니다.SELab에서는 소프트웨어공학 전 분야, 멀티쓰레드 소프트웨어 및 웹 기술을 함께 연구할 석사, 박사, 석박통합 및 박사후 과정의 연구원을 모집하고 있습니다.SELab에서는 소프트웨어공학 전 분야, 멀티쓰레드 소프트웨어 및 웹 기술을 함께 연구할 석사, 박사, 석박통합 및 박사후 과정의 연구원을 모집하고 있습니다.SELab에서는 소프트웨어공학 전 분야, 멀티쓰레드 소프트웨어 및 웹 기술을 함께 연구할 석사, 박사, 석박통합 및 박사후 과정의 연구원을 모집하고 있습니다.SELab에서는 소프트웨어공학 전 분야, 멀티쓰레드 소프트웨어 및 웹 기술을 함께 연구할 석사, 박사, 석박통합 및 박사후 과정의 연구원을 모집하고 있습니다.SELab에서는 소프트웨어공학 전 분야, 멀티쓰레드 소프트웨어 및 웹 기술을 함께 연구할 석사, 박사, 석박통합 및 박사후 과정의 연구원을 모집하고 있습니다."
      },
      {
        title: "2014 PL-SE First Joint Workshop",
        name: "Scott-Uk-Jin Lee",
        date: "29 Apr 2014",
        value: "Finally"
      },
      {
        title: "Welcome to SELab Workshop",
        name: "Scott-Uk-Jin Lee",
        date: "06 Mar 2014",
        value: "I've Got It"
      }
    ]
  };

  render() {
    return (
      <PageTemplate className="Notice">
        <h1>NOTICE</h1>
        <div className="board">
          {[this.state.contents.map((x, y) => <Row {...x} key={y}></Row>)]}
        </div>
      </PageTemplate>
    );
  }
}

export default Notice;
