import React, { Component } from "react";

import Header from "component/common/header";
import compile from "lib/compile.js";
import LiveCoding from "component/LiveCoding";
import SlideTitle from "./SlideTitle";
import SlidePage from "./SlidePage";
import SlideSection from "./SlideSection";
import PageTitle from "./PageTitle";
import PageContent from "./PageContent";

import "style/Slide.scss";

class Slide extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    let slideData = this.extractPage(this.props);

    let overviewJsx = this.constructOverview(slideData);

    this.state = {
      siderBarActive: true,
      KeyEventActive: true,
      currentIndex: 0,
      slideData: slideData,
      overviewJsx: overviewJsx
    };

    window.addEventListener("keyup", this.handleKeyEvent);
  }

  componentDidUpdate() {
    let LiveCodingList = document.querySelectorAll(".LiveCoding .Input");
    for (const inputComp of LiveCodingList) {
      compile(inputComp.parentElement);
      for (const query of [".html", ".css", ".js"]) {
        inputComp.querySelector(query).onfocus = () => {
          this.KeyEventActivate(false);
        };
        inputComp.querySelector(query).onblur = e => {
          e.preventDefault();
          this.KeyEventActivate(true);
          compile(
            e.target.parentElement.parentElement.parentElement.parentElement
          );
        };
      }
    }
  }

  getText = item => {
    if (typeof item === "string") {
      return item;
    } else {
      let text = "";
      for (const child of item) {
        if (typeof child === "string") {
          text += child;
        } else {
          text += this.getText(child.props.children);
        }
      }
      return text;
    }
  };

  hookLiveCoding = content => {
    console.log("content is ", content);
    if (content === undefined) {
      return undefined;
    } else if (typeof content === "string") {
      return content;
    } else if (content.type === LiveCoding) {
      return (
        <LiveCoding
          {...content.props}
          KeyEventActivate={this.KeyEventActivate}
        ></LiveCoding>
      );
    } else {
      let tmp = [];
      if (content.length === undefined) content = [content];
      for (const child of content) {
        console.log("child is ", child);
        if (typeof child === "string") {
          tmp.push(child);
        } else {
          let children = this.hookLiveCoding(child.props.children);
          let jsx;
          if (children === undefined) {
            jsx = <child.type {...child.props} />;
          } else {
            jsx = <child.type {...child.props}>{children}</child.type>;
          }
          tmp.push(jsx);
        }
      }
      return tmp;
    }
  };

  extractPage = props => {
    let length = 1;
    let tmp = props.children.map(section => {
      let pages = section.props.children;
      if (pages.length === undefined) pages = [pages];

      return {
        sTitle: section.props.title,
        pages: pages.map(page => {
          length++;
          return {
            sTitle: this.getText(page.props.children[0].props.children),
            title: page.props.children[0],
            // content: (
            //   <PageContent>
            //     {this.hookLiveCoding(page.props.children[1].props.children)}
            //   </PageContent>
            // )
            content: page.props.children[1]
          };
        })
      };
    });

    return {
      length: length,
      cover: {
        sTitle: `${("00" + props.no).slice(-2)}.${props.title}`,
        title: (
          <PageTitle>{`${props.lectureID}: ${props.lectureName} ${(
            "00" + props.no
          ).slice(-2)}.${props.title}`}</PageTitle>
        ),
        content: (
          <PageContent>
            <h2>Scott Uk-Jin Lee</h2>

            <p className="license">
              Reproduced with permission of the authors. Copyright 2012 Marty
              Stepp, Jessica Miller, and Victoria Kirst. All rights reserved.
              Further reproduction or distribution is prohibited without written
              permission.
            </p>

            <div className="w3c">
              <a href="https://validator.w3.org/check/referer">
                <img
                  src="./CSE3026 - 08. JavaScript_files/w3c-html.png"
                  alt="Valid HTML 5"
                />
              </a>
              <a href="https://jigsaw.w3.org/css-validator/check/referer">
                <img
                  src="./CSE3026 - 08. JavaScript_files/w3c-css.png"
                  alt="Valid CSS!"
                />
              </a>
            </div>
          </PageContent>
        )
      },
      sections: tmp
    };
  };

  handleActive = value => {
    this.setState({
      siderBarActive: value
    });
  };

  handleIndex = index => {
    console.log(index);
    if (index >= 0 && index < this.state.slideData.length) {
      this.setState({
        currentIndex: index
      });
    }
  };

  handleKeyEvent = event => {
    if (this.state.KeyEventActive) {
      if (event.code === "ArrowRight") {
        this.handleIndex(this.state.currentIndex + 1);
      } else if (event.code === "ArrowLeft") {
        this.handleIndex(this.state.currentIndex - 1);
      } else if (event.code === "Space") {
        this.handleIndex(this.state.currentIndex + 1);
      }
    }
  };

  KeyEventActivate = value => {
    this.setState({ KeyEventActive: value });
  };

  constructOverview = slideData => {
    let index = 0;
    return [
      <li onClick={() => this.handleIndex(0)} key="cover">
        <h2>{slideData.cover.sTitle}</h2>
      </li>
    ].concat(
      slideData.sections.map((section, sIndex) => {
        let tmp = 0;
        let jsx = section.pages.map((page, pIndex) => {
          tmp++;
          let rIndex = pIndex + index + 1;
          return (
            <li
              onClick={() => this.handleIndex(rIndex)}
              key={sIndex + "_" + pIndex}
            >
              {page.sTitle}
            </li>
          );
        });
        index = tmp;
        return (
          <li key={sIndex}>
            <h3>{section.sTitle}</h3>
            <ul>{jsx}</ul>
          </li>
        );
      })
    );
  };

  constructPages = slideData => {
    let index = 1;
    let jsx = [
      <div
        className={`lecture_note_item${
          0 === this.state.currentIndex ? "" : " deactive"
        }`}
        key="cover"
      >
        {slideData.cover.title}
        <hr />
        {slideData.cover.content}
      </div>
    ];
    for (const section of slideData.sections) {
      for (const page of section.pages) {
        let i = index++;
        jsx.push(
          <div
            className={`lecture_note_item${
              i === this.state.currentIndex ? "" : " deactive"
            }`}
            key={index}
          >
            {page.title}
            <hr />
            {page.content}
          </div>
        );
      }
    }
    return jsx;
  };

  render() {
    return (
      <>
        <Header></Header>
        <main className="Slide">
          <div
            className={`sider_bar_wrap${
              this.state.siderBarActive ? "" : " deactive"
            }`}
          >
            <nav className="sider_bar">
              <ul>{this.state.overviewJsx}</ul>
            </nav>
          </div>
          <div className="sider_bar_button_wrap">
            <button
              className={this.state.siderBarActive ? "" : "deactive"}
              onClick={() => {
                this.handleActive(!this.state.siderBarActive);
              }}
            >
              {this.state.siderBarActive ? "<" : ">"}
            </button>
          </div>

          <div
            className={`lecture_note_wrap${
              this.state.siderBarActive ? "" : " sider_deactive"
            }`}
          >
            {this.constructPages(this.state.slideData)}
          </div>
        </main>
      </>
    );
  }
}

export default Slide;
export { SlidePage, SlideTitle, SlideSection, PageTitle, PageContent };
