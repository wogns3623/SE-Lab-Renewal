import React, { Component } from "react";

import Header from "component/common/header";

import SlideTitle from "./SlideTitle";
import SlidePage from "./SlidePage";
import SlideSection from "./SlideSection";
import PageTitle from "./PageTitle";
import PageContent from "./PageContent";

import "style/Slide.css";

class Slide extends Component {
  // todo: 1. 화살표 버튼 or space bar로 페이지 이동기능
  // 2.
  constructor() {
    super();

    this.state = {
      siderBarActive: true,
      currentIndex: 0,
      slideTitle: null,
      pageTitles: [],
      pageContents: [],
      slideIndex: []
    };

    window.addEventListener("keyup", this.handleKeyEvent);
  }

  componentDidMount() {
    console.log(this.extractPage());
    let {
      slideTitle,
      pageTitles,
      pageContents,
      slideIndex
    } = this.extractPage();

    this.setState({
      slideTitle: slideTitle,
      pageTitles: pageTitles,
      pageContents: pageContents,
      slideIndex: slideIndex
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

  extractPage = () => {
    let slideTitle = null;
    let pageContents = [];
    let pageTitles = [];
    let slideIndex = [];
    this.props.children.map(slideItem => {
      if (slideItem.type === SlideTitle) {
        slideTitle = slideItem;

        let firstPageTitle = (
          <PageTitle>
            {`${this.props.lectureID}: ${this.props.lectureName} ${(
              "00" + this.props.no
            ).slice(-2)}.${slideTitle.props.children}`}
          </PageTitle>
        );

        let firstPageComponent = (
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
        );
        slideIndex.push(firstPageTitle.props.children);
        pageTitles.push(firstPageTitle);
        pageContents.push(firstPageComponent);
      } else if (slideItem.type === SlideSection) {
      } else if (slideItem.type === SlidePage) {
        slideItem.props.children.map(pageItem => {
          if (pageItem.type === PageTitle) {
            pageTitles.push(pageItem);

            let getText = item => {
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

            slideIndex.push(getText(pageItem.props.children));
          } else if (pageItem.type === PageContent) {
            pageContents.push(pageItem);
          }
        });
      }
    });

    return {
      slideTitle: slideTitle,
      pageTitles: pageTitles,
      pageContents: pageContents,
      slideIndex: slideIndex
    };
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
