import React, { Component } from "react";

import TabMenu from "component/common/tab/TabMenu.js";
import "style/Gallery.css";
import GalleryTable from "component/gallery/GalleryTable.js";

class GalleryTab extends Component {
  state = {
    currentTab: 0,
    RisActive: false,
    readmore: "yes",
    count: 10
  };

  readmoreCount = [0, 0, 0, 0];

  componentDidMount() {
    this.selectTab(this.props.initialTabIndex);
  }

  selectTab = index => {
    this.setState({
      currentTab: index
    });
    this.readmore(false);
    if (this.readmoreCount[index] <= this.state.count) {
      this.setState({
        readmore: "no"
      });
    }
    this.readmoreCount[index] = 0;
  };

  readmore = value => {
    if (!value) {
      this.setState({
        RisActive: false
      });
      this.setState({
        readmore: "yes"
      });
    } else {
      this.setState({
        RisActive: true
      });
      this.setState({
        readmore: "no"
      });
    }
  };

  disable = (item, index) => {
    const cT = this.state.currentTab;
    const tL = this.props.tabList;
    let isActive = " deactive";
    if (cT === 0 || tL[cT].name === item.id) {
      isActive = "";
      console.log(this.readmoreCount[cT]);
      this.readmoreCount[cT] += 1;
      if (
        this.readmoreCount[cT] > this.state.count &&
        this.state.RisActive === false
      ) {
        isActive = " deactive";
      } else if (this.state.RisActive === true) {
        isActive = "";
      }
    }

    return (
      <GalleryTable className={isActive} {...item} key={index}></GalleryTable>
    );
  };

  render() {
    return (
      <div className="Tab">
        <TabMenu
          items={this.props.tabList.map((tab, index) => {
            tab.className =
              this.state.currentTab === index ? tab.name + " active" : tab.name;
            return tab;
          })}
          onClickFunc={this.selectTab}
        ></TabMenu>
        <div id="hl"></div>
        <div className="Contents">
          {this.props.contents.map(this.disable)}
          <div className="Rbtn">
            <button
              className={this.state.readmore}
              onClick={() => this.readmore(true)}
            >
              readmore
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryTab;
