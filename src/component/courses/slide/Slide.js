import React, { Component } from "react";

import Header from "component/common/header";
import { SlidePage, SlideTitle, PageTitle, PageContent } from "./";
import "style/Slide.css";

class Slide extends Component {
  // todo: 1. 화살표 버튼 or space bar로 페이지 이동기능
  // 2.

  state = {
    siderBarActive: true,
    currentIndex: 0
  };

  handleActive = value => {
    this.setState({
      siderBarActive: value
    });
  };

  handleIndex = index => {
    this.setState({
      currentIndex: index
    });
  };

  extractPage = () => {
    let title = null;
    let page = [];
    let slideIndex = [];
    this.props.children.map((slideItem, slideItemIndex) => {
      if (slideItem.type === SlideTitle) {
        title = slideItem;
      } else if (slideItem.type === SlidePage) {
        page.push(slideItem);
        slideItem.props.children.map((pageItem, pageItemIndex) => {
          if (pageItem.type === PageTitle) {
            slideIndex.push(pageItem);
          }
        });
      }
    });

    return { title: title, page: page, slideIndex: slideIndex };
  };

  render() {
    // console.log(this.props.children[1]);
    let { title, page, slideIndex } = this.extractPage();
    console.log(title, page, slideIndex);
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
              {slideIndex.map((item, index) => {
                return (
                  <div
                    className="slide_index_item"
                    onClick={() => this.handleIndex(index)}
                    key={index}
                  >
                    {item.props.children}
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
            {page.map((item, index) => {
              return (
                <div
                  className={`lecture_note_item${
                    index === this.state.currentIndex ? "" : " deactive"
                  }`}
                  key={index}
                >
                  {item.props.children}
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
