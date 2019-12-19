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
        title: "회식1",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식2",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식3",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식4",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식5",
        id: "Conference",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식6",
        id: "Conference",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식7",
        id: "Etc",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식8",
        id: "Etc",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식9",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식10",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식11",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식12",
        id: "Social Activity",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식13",
        id: "Conference",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식14",
        id: "Conference",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식15",
        id: "Etc",
        address:
          "https://selab.hanyang.ac.kr/gallery/images/2016-07-25%2012.25.28.jpg"
      },
      {
        title: "회식16",
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
