import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Home from "./Home";
import Slide from "./Slide";

class cse326 extends Component {
  render() {
    return (
      <>
        <h1>Web Application Development</h1>

        <Tabs selectedTabClassName="active">
          <TabList className="TabMenu">
            <Tab className="Item">Home</Tab>
            <Tab className="Item">Slides</Tab>
          </TabList>

          <div id="hl"></div>

          <TabPanel>
            <Home></Home>
          </TabPanel>

          <TabPanel>
            <Slide></Slide>
          </TabPanel>
        </Tabs>
      </>
    );
  }
}

export default cse326;
