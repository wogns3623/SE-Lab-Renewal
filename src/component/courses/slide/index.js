import React, { Component } from "react";

import Header from "component/common/header";

import SlideTitle from "./SlideTitle";
import SlidePage from "./SlidePage";
import SlideSection from "./SlideSection";
import PageTitle from "./PageTitle";
import PageContent from "./PageContent";

import "style/Slide.css";

const getText = item => {
  if (typeof item === "string") {
    return item;
  } else {
    let text = "";
    for (const child of item) {
      if (typeof child === "string") {
        text += child;
      } else {
        text += getText(child.props.children);
      }
    }
    return text;
  }
};

const extractPage = props => {
  slideTitle = props.children[0];

  let firstPageTitle = `${props.lectureID}: ${props.lectureName} ${(
    "00" + props.no
  ).slice(-2)}.${slideTitle.props.children}`;

  let slideData = {
    cover: {
      sTitle: firstPageTitle,
      title: <PageTitle>{firstPageTitle}</PageTitle>,
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
    section: []
  };

  props.children.map(slideItem => {
    if (slideItem.type === SlideSection) {
      slideData.content.push({
        title: slideItem.children,
        page: []
      });
    } else if (slideItem.type === SlidePage) {
      let pageData = {
        sTitle: null,
        title: null,
        content: null
      };
      slideItem.props.children.map(pageItem => {
        if (pageItem.type === PageTitle) {
          pageData.title = pageItem;

          pageData.sTitle = getText(pageItem.props.children);
        } else if (pageItem.type === PageContent) {
          pageContents.push(pageItem);
        }
      });

      slideData.section[slideData.content.length - 1].page.push(pageData);
    }
  });

  return slideData;
};

class Slide extends Component {
  // todo: 1. 화살표 버튼 or space bar로 페이지 이동기능
  // 2.
  constructor() {
    super();

    this.state = {
      siderBarActive: true,
      currentIndex: 0,
      slideData: null
    };

    window.addEventListener("keyup", this.handleKeyEvent);
  }

  componentDidMount() {
    let slideData = extractPage(this.props);

    this.setState({
      slideData: slideData
    });
  }

  handleActive = value => {
    this.setState({
      siderBarActive: value
    });
  };

  handleIndex = index => {
    if (index >= 0 && index < this.state.pageContents.length) {
      this.setState({
        currentIndex: index
      });
    }
  };

  handleKeyEvent = event => {
    if (event.code === "ArrowRight") {
      this.handleIndex(this.state.currentIndex + 1);
    } else if (event.code === "ArrowLeft") {
      this.handleIndex(this.state.currentIndex - 1);
    } else if (event.code === "Space") {
      this.handleIndex(this.state.currentIndex + 1);
    }
  };

  constructOverview = () => {
    let slideIndex = this.state.slideIndex;
  };

  render() {
    console.log(this.state);
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
              {this.state.slideIndex.map((item, index) => {
                return (
                  <div
                    className="slide_index_item"
                    onClick={() => this.handleIndex(index)}
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
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

          <div className="lecture_note_wrap">
            {this.state.pageContents.map((item, index) => {
              return (
                <div
                  className={`lecture_note_item${
                    index === this.state.currentIndex ? "" : " deactive"
                  }`}
                  key={index}
                >
                  {this.state.pageTitles[index]}
                  {item}
                </div>
              );
            })}
          </div>
        </main>
      </>
    );
  }
}

export default Slide;
export { SlidePage, SlideTitle, SlideSection, PageTitle, PageContent };
