import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import PageTemplate from "component/common/template/PageTemplate.js";

import "style/Gallery.scss";
import "style/Tab.scss";

import data from "assets/data/gallery.json";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0,
      readmore: "deactive",
      category: ["All", "Social Activity", "Conference", "Etc"],
    };
  }

  static getDerivedStateFromProps(props) {
    let tabIndex = 0;
    if (props.location.state != null) {
      tabIndex = props.location.state.tabIndex;
    }
    return { tabIndex: tabIndex };
  }

  activeReadmore = () => {
    this.setState({ readmore: "active" });
  };

  onSelect = (index) => {
    this.setState({ readmore: "deactive" });

    this.props.history.replace("/gallery", {
      tabIndex: index,
    });
  };

  renderTab = () => {
    return this.state.category.map((name) => {
      return <Tab className="Item">{name}</Tab>;
    });
  };

  renderTabPanel = (data) => {
    let contentAll = [];

    let panels = data.map((tabInfo) => {
      let panelContent = tabInfo.list.map((listItem) => {
        return (
          <div className="Item">
            <img src={listItem.src} alt=""></img>
            <br></br>
            {listItem.title}
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
          <TabList className="TabMenu">{this.renderTab()}</TabList>

          <hr />

          {this.renderTabPanel(data)}
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
