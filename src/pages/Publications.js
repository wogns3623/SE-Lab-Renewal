import React, { Component } from "react";

import PageTamplate from "component/common/template/PageTemplate.js";
import ModifiedTap from "component/publications/ModifiedTap.js";
import ALL from "component/publications/publications.json";
import "style/Publications.scss";

class Publications extends Component {
  state = {
    tabList: [
      { name: "All" },
      { name: "International Conference" },
      { name: "International Journal" },
      { name: "Domestic Conference" },
      { name: "Domestic Journal" }
    ]
  };
  render() {
    console.log(this.props);
    return (
      <PageTamplate className="Publications">
        <div>
          <h1>PUBLICATIONS</h1>

          <ModifiedTap
            initialTabIndex={
              this.props.location.state === null ||
              this.props.location.state === undefined
                ? 0
                : this.props.location.state.tabIndex
            }
            tabList={this.state.tabList}
            contents={ALL}
          ></ModifiedTap>
        </div>
      </PageTamplate>
    );
  }
}

export default Publications;
