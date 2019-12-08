import React, { Component } from "react";

import PageTemplate from "component/common/template/PageTemplate.js";
import GalleryTab from "component/gallery/GalleryTab.js";


class Gallery extends Component {
  state = {
    tabList: [
      { name: "All" },
      { name: "Social Activity" },
      { name: "Conference" },
      { name: "Etc" }
    ],
    ALL: [
      {
        title: "회식",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식",
        id: "Conference",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식",
        id: "Conference",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식",
        id: "Etc",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      }
    ]
  };

  render() {
    return (
      <PageTemplate className="Gallery">
        <div className="table">
          <h1 id="headname">Gallery</h1>
          <GalleryTab
            tabList={this.state.tabList}
            contents={this.state.ALL}
          ></GalleryTab>
        </div>
      </PageTemplate>
    );
  }
}

export default Gallery;
