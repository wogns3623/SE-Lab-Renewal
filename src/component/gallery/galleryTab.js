import React, { Component } from "react";

import TabMenu from "component/common/tab/TabMenu.js";
import "style/Tab.css";
import "style/Gallery.css";
import GalleryTable from "component/gallery/GalleryTable.js";

class GalleryTab extends Component {
  state = {
    currentTab: 0
  };

  selectTab = index => {
    this.setState({
      currentTab: index
    });
  };

  disable = (item, index) => {
    index = index + 1;
    const cT = this.state.currentTab;
    const tL = this.props.tabList;
    let isActive = " deactive";

    if (cT === 0 || tL[cT].name === item.id) {
      isActive = "";
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
              this.state.currentTab !== index
                ? tab.name + " deactive"
                : tab.name;
            return tab;
          })}
          onClickFunc={this.selectTab}
        ></TabMenu>

        <div id="hl"></div>

        <div className="Contents">{this.props.contents.map(this.disable)}</div>
      </div>
    );
  }
}

export default GalleryTab;
