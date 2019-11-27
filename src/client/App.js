import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  Notice,
  Members,
  Research,
  Publications,
  Courses,
  Gallery,
  Login,
  Test
} from "pages";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/notice" component={Notice} />
        <Route path="/members" component={Members} />
        <Route path="/research" component={Research} />
        <Route path="/publications" component={Publications} />
        <Route exact path="/courses" component={Courses} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/login" component={Login} />
        <Route path="/test" component={Test} />
      </BrowserRouter>
    );
  }
}

export default App;
