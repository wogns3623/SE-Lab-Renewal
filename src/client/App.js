import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import * as pages from "pages";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={pages.Home} />
          <Route path="/notice" component={pages.Notice} />
          <Route path="/members" component={pages.Members} />
          <Route path="/research" component={pages.Research} />
          <Route path="/publications" component={pages.Publications} />
          <Route path="/courses" component={pages.Courses} />
          <Route path="/gallery" component={pages.Gallery} />
          <Route path="/slide" component={pages.Slide} />
          <Route component={pages.NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
