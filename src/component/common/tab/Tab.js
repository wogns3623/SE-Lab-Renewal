import React, { Component } from "react";

import TabMenu from "./TabMenu";
import "style/Tab.css";

class Tab extends Component {
  state = {
    currentTab: 0
  };

  selectTab = index => {
    this.setState({
      currentTab: index
    });
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

        <div className="Contents">
          {this.props.tabList.map((item, index) => {
            return (
              <div
                className={
                  item.name +
                  (this.state.currentTab === index ? "" : " deactive")
                }
                key={index}
              >
                {this.props.children[index]}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tab;
