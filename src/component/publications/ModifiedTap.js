import React, { Component } from "react";

import TabMenu from "component/common/tab/TabMenu.js";
import Table from "component/publications/table.js";

import "style/Publications.scss";
import "style/Tab.scss";

class ModifiedTap extends Component {
  state = {
    currentTab: 0,
  };

  componentDidMount() {
    this.selectTab(this.props.initialTabIndex);
  }

  selectTab = (index) => {
    this.setState({
      currentTab: index,
    });
  };

  disable = (item, index) => {
    index = index + 1;
    let isActive = " deactive";
    let title = " deactive";
    if (this.state.currentTab === index || this.state.currentTab === 0) {
      isActive = "";
    }
    if (this.state.currentTab === 0) {
      title = "";
    }

    return (
      <div className={item.name + isActive} key={index}>
        <div className={"title" + title}>{item.name}</div>
        <ul>
          {[
            item.list.map((ICinfo, index) => (
              <Table {...ICinfo} key={index}></Table>
            )),
          ]}
        </ul>
      </div>
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

        <hr />

        <div className="Contents">{this.props.contents.map(this.disable)}</div>
      </div>
    );
  }
}

export default ModifiedTap;
