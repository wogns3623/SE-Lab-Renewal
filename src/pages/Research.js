import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import PageTemplate from "component/common/template/PageTemplate";
import Subject from "component/research/Subject";
import "style/Research.scss";
import research from "component/research/research.json";

class Research extends Component {
  render() {
    return (
      <PageTemplate className="Research">
        <Tabs selectedTabClassName="active">
          <TabList className="TabMenu">
            <Tab className="Item">Introduction</Tab>
            <Tab className="Item">Project</Tab>
          </TabList>

          <div id="hl"></div>

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
