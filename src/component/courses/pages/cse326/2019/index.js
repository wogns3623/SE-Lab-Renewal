import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Home from "./Home";
import SlideList from "./SlideList";
import "style/cse326.css";

class cse326 extends Component {
  render() {
    console.log(this.props.location);
    return (
      <>
        <h1>Web Application Development</h1>

        <Tabs
          selectedTabClassName="active"
          defaultIndex={
            this.props.location.state === null ||
            this.props.location.state === undefined
              ? 0
              : this.props.location.state.tabIndex
          }
        >
          <TabList className="TabMenu">
            <Tab className="Item">Home</Tab>
            <Tab className="Item">Slides</Tab>
          </TabList>

          <div id="hl"></div>

          <TabPanel>
            <Home></Home>
          </TabPanel>

          <TabPanel>
            <SlideList></SlideList>
          </TabPanel>
        </Tabs>
      </>
    );
  }
}

export default cse326;
