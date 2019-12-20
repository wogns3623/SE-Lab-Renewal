import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import {
  Home,
  Notice,
  Members,
  Research,
  Publications,
  Courses,
  Gallery,
  Slide,
  Test,
  NoMatch
} from "pages";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notice" component={Notice} />
          <Route path="/members" component={Members} />
          <Route path="/research" component={Research} />
          <Route path="/publications" component={Publications} />
          <Route path="/courses" component={Courses} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/slide" component={Slide} />
          <Route path="/test" component={Test} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
