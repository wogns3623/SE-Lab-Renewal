import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import PageTemplate from "component/common/template/PageTemplate";
import Subject from "component/research/Subject";

import "style/Research.scss";
import "style/Tab.scss";

import research from "assets/data/research.json";

class Research extends Component {
  state = {
    tabIndex: 0,
  };

  static getDerivedStateFromProps(props) {
    if (props.location.state == null) {
      return { tabIndex: 0 };
    } else {
      return { tabIndex: props.location.state.tabIndex };
    }
  }

  onSelect = (index) => {
    this.props.history.replace("/research", {
      tabIndex: index,
    });
  };

  render() {
    return (
      <PageTemplate className="Research">
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={this.onSelect}
          selectedTabClassName="active"
        >
          <TabList className="TabMenu">
            <Tab className="Item">Introduction</Tab>
            <Tab className="Item">Project</Tab>
          </TabList>

          <hr />

          <TabPanel>
            {research.map((researchInfo, index) => (
              <Subject {...researchInfo} key={index}></Subject>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>공사중</h2>
          </TabPanel>
        </Tabs>
      </PageTemplate>
    );
  }
}

export default Research;
