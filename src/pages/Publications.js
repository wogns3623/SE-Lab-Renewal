import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import PageTamplate from "component/common/template/PageTemplate.js";
import ALL from "assets/data/publications.json";
import "style/Publications.scss";

class Publications extends Component {
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
    this.props.history.replace("/publications", {
      tabIndex: index,
    });
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
      let panelContent = [
        <div className="title">{tabInfo.name}</div>,
        <ul>
          {tabInfo.list.map((listItem) => {
            return (
              <li className="list">
                <a href={listItem.address}>{listItem.title}</a>
              </li>
            );
          })}
        </ul>,
      ];
      contentAll.push(panelContent);

      return <TabPanel>{panelContent}</TabPanel>;
    });

    let all = [<TabPanel>{contentAll}</TabPanel>];

    return all.concat(panels);
  };

  render() {
    return (
      <PageTamplate className="Publications">
        <div>
          <h1>PUBLICATIONS</h1>

          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={this.onSelect}
            selectedTabClassName="active"
          >
            <TabList className="TabMenu">{this.createTab(ALL)}</TabList>

            <hr />

            {this.createTabPanel(ALL)}
          </Tabs>
        </div>
      </PageTamplate>
    );
  }
}

export default Publications;
