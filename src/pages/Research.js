import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import PageTemplate from "component/common/template/PageTemplate";
import Subject from "component/research/Subject";

import "style/Research.scss";
import "style/Tab.scss";

import research from "component/research/research.json";

class Research extends Component {
  state = {
    selectedIndex: 0,
  };

  static getDerivedStateFromProps(props) {
    if (props.location.state == null) {
      return { selectedIndex: 0 };
    } else {
      return { selectedIndex: props.location.state.tabIndex };
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
          defaultIndex={this.state.selectedIndex}
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
