import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import PageTemplate from "component/common/template/PageTemplate.js";

import "style/Gallery.scss";
import "style/Tab.scss";

import data from "assets/data/gallery.json";

class Gallery extends Component {
  state = {
    tabIndex: 0,
    readmore: "deactive",
  };

  static getDerivedStateFromProps(props) {
    if (props.location.state == null) {
      return { tabIndex: 0 };
    } else {
      return { tabIndex: props.location.state.tabIndex };
    }
  }

  onSelect = (index) => {
    this.setState({ readmore: "deactive" });

    this.props.history.replace("/gallery", {
      tabIndex: index,
    });
  };

  activeReadmore = () => {
    this.setState({ readmore: "active" });
  };

  createTab = (data) => {
    return [
      <Tab className="Item">All</Tab>,
      data.map((tabInfo) => {
        return <Tab className="Item">{tabInfo.name}</Tab>;
      }),
    ];
  };

  createTabPanel = (data) => {
    let contentAll = [];

    let panels = data.map((tabInfo) => {
      let panelContent = tabInfo.list.map((listItem) => {
        return (
          <div className="Item">
            <a href={listItem.address}>
              <img src={listItem.address} alt=""></img>
              <br></br>
              {listItem.title}
            </a>
          </div>
        );
      });
      contentAll.push(panelContent);

      return <TabPanel className="Contents">{panelContent}</TabPanel>;
    });

    let all = [<TabPanel className="Contents">{contentAll}</TabPanel>];

    return all.concat(panels);
  };

  render() {
    return (
      <PageTemplate className="Gallery">
        <h1>GALLERY</h1>

        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={this.onSelect}
          selectedTabClassName="active"
        >
          <TabList className="TabMenu">{this.createTab(data)}</TabList>

          <hr />

          {this.createTabPanel(data)}
          {/* Todo: readmore 버튼 기능 만들기 */}
          {/* <button
            className={`btn-readmore ${this.state.readmore}`}
            onClick={this.activeReadmore}
          >
            readmore
          </button> */}
        </Tabs>
      </PageTemplate>
    );
  }
}

export default Gallery;
