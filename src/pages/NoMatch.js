import React, { Component } from "react";

import PageTemplate from "component/common/template/PageTemplate.js";

class NoMatch extends Component {
  render() {
    return (
      <PageTemplate className="NoMatch">
        <h1>404 Error!</h1>
      </PageTemplate>
    );
  }
}

export default NoMatch;
